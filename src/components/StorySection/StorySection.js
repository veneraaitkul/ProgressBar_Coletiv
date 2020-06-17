import React, { useEffect, useRef, useCallback } from "react";
import "./StorySection.scss";
import stories from "./stories.json";

export default function StorySection() {
  const progressRef = useRef(null);
  const divRef = useRef(null);

  // document.documentElement returns the Element that is the root element of the document and refers to <html> element

  // set reference viewport size for desktop e mobile
  let currentMiddlePosition =
    window.innerWidth > 400
      ? document.documentElement.scrollTop + window.innerHeight / 2 + 128
      : document.documentElement.scrollTop + window.innerHeight / 2 - 100;

  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
  // it prevents unnecessary renders
  const scrollProgress = useCallback(() => {
    let indicators = document.getElementsByClassName(
      "progress-indicator-bubble"
    );

    // gets or sets the number of pixels that an element's content is scrolled vertically
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    // set range height
    progressRef.current.style.height = scrollTop + 128 + "px";

    // The Array is the object which we create new arrays from (new Array())
    // and these new arrays are passed methods and properties, like slice
    // slice iterates over that Array

    // I use Array.prototype so I don't have to initialise a new array

    //get progress bubbles
    indicators = Array.prototype.slice.call(indicators);

    indicators.forEach((indicator) => {
      // for each indicator element, getBoundingClientRect() returns the size of an element and its position relative to the viewport
      const pos = indicator.getBoundingClientRect();

      if (pos.y < currentMiddlePosition) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }, [currentMiddlePosition]);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  }, [scrollProgress]);

  const ProgressBubble = ({ state }) => {
    return (
      <div
        className={
          state
            ? `progress-indicator-bubble ${state}`
            : `progress-indicator-bubble`
        }
      ></div>
    );
  };

  const Range = () => {
    return <div className="progress-bar" ref={progressRef} />;
  };

  const ProgressBar = () => {
    return (
      <div className="progress-container">
        <Range />
      </div>
    );
  };

  return (
    <section className="section-wrapper">
      <section className="section-inner-wrapper" ref={divRef}>
        <ProgressBar />

        {stories.map((item, i) => (
          <section className="section story-section" id={item._id} key={i}>
            <figure className="image story-image story-element">
              <img alt="coletiv-pic" src={item.image} className="picture" />
            </figure>

            {item._id === 0 ? (
              <>
                <ProgressBubble state={"active first-child"} />
                <ProgressBubble />
              </>
            ) : item._id === 5 ? (
              <>
                <ProgressBubble />
                <ProgressBubble state={"last-child"} />
              </>
            ) : (
              <ProgressBubble />
            )}

            <div className="story-text story-element">
              <p className="is-uppercase has-text-info is-size-6-desktop is-size-7-mobile has-text-weight-bold">
                {item.subtitle}
              </p>

              <p className="subtitle is-size-4-mobile is-size-2-tablet is-size-2-desktop has-text-weight-bold">
                {item.title}
              </p>

              <p className="text-section">
                {item.mainText.map((item, i) => (
                  <span key={i} className="main-text is-block">
                    {item}
                  </span>
                ))}
              </p>

              <p className="text has-text-grey is-italic ">{item.question}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}
