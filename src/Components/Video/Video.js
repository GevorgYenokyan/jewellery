import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

function Video() {
  return (
    <div className="video_div">
      <video autoPlay muted loop className="video_cont">
        <source src="/img/backgraund/backgraund8.webm" type="video/webm" />
      </video>
      <div className="video_text_div">
        <h1 className="video_text">
          ՄԵՐ ՀԱՄԱՐ ՄԵԾ ՊԱՏԱՍԽԱՆԱՏՎՈԻԹՅՈՒՆ Է ՕԳՆԵԼ ԴԵԶ ԵՐՋԱՆԿԱՑՆԵԼ ՁԵՐ
          ՍԻՐԵԼԻՆԵՐԻՆ
        </h1>
        <Link className="video_link" to={"./"}>
          իմանալ ավելին
        </Link>
      </div>
    </div>
  );
}

export default Video;
