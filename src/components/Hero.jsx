import React from "react";
import PersonalImg from "../imgs/hacen-barboucha.jpeg";
import "../index.css";

export default function  Hero() {
  return (
    <div className="hero">
    <img
      src={PersonalImg}
      alt="hacen barboucha image"
      className="hero_media"
    />
    </div>
  )
}

