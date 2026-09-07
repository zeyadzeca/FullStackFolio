import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import CommStation from "../../components/commStation/CommStation";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className="main contact-margin-top"
        id="contact"
        aria-label="Communication Station"
      >
        <div className="contact-div-main glass-panel">
          <div className="contact-header">
            <span className="section-orbit">Communication Satellite</span>
            <h1 className="heading contact-title">Send a Transmission</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.title}
            </p>
            <p
              className={
                isDark ? "dark-mode contact-copy" : "subTitle contact-copy"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              {contactInfo.email_address && (
                <a
                  className="contact-detail-email"
                  href={"mailto:" + contactInfo.email_address}
                >
                  {contactInfo.email_address}
                </a>
              )}
              <div className="contact-actions">
                {contactInfo.email_address ? (
                  <Button
                    text="Send a Transmission"
                    href={"mailto:" + contactInfo.email_address}
                  />
                ) : null}
                {contactInfo.number ? (
                  <Button
                    text="Let's Connect"
                    href={"tel:" + contactInfo.number}
                  />
                ) : null}
              </div>
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <CommStation />
          </div>
        </div>
      </section>
    </Fade>
  );
}
