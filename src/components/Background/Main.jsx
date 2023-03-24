import React from "react";
import videoBg from "../../assets/videoBg.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="introText">
        <h1>Hi,</h1>
        <h1>I'm Cody,</h1>
        <h1>FullStack Web Develepor</h1>
        <h2>
          Working to grow my knowledge and build websites for the world to use
          and make life easier! I want to solve real world problems with code!
        </h2>
      </div>
    </div>
  );
};

export default Main;
