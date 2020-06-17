import React from "react";
import Navbar from "../Navbar/Navbar";
import StorySection from "../StorySection/StorySection";
import Footer from "../Footer/Footer";

import "./MainContent.scss";

export default function MainContent() {
  const BigTitle = (props) => {
    return (
      <h1 className="title big-title is-size-1-desktop is-size-3-mobile is-size-1-tablet">
        {props.text}
      </h1>
    );
  };

  return (
    <div>
      <Navbar />
      <BigTitle text={"A tale of talent"} />
      <StorySection />
      <Footer />
    </div>
  );
}
