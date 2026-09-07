import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import SpaceExplorer from "../../components/spaceExplorer/SpaceExplorer";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <section
        className="greet-main"
        id="greeting"
        aria-label="Space Base greeting"
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <span className="section-orbit">Space Base</span>
              <p className="engineer-kicker">
                Software Engineer · Personal Universe
              </p>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji" aria-hidden="true">
                  {emoji("👋")}
                </span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Let's Connect" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="Explore My Journey"
                    href={greeting.resumeLink}
                    newTab={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <SpaceExplorer />
          </div>
        </div>
      </section>
    </Fade>
  );
}
