import React from "react";
import "../Contact/Contact.css";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import ContactImage from "../../Assets/Contact/Contact.6990d94c58006204e6cb.png";
const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="contact-page">
        <div className="contact-page-container">
          <div className="contact-page-title-container">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-form-container-table">
            <div className="contact-page-right-container-form">
              <TextInput
                className="contact-form-container"
                label="Name"
                withAsterisk
                placeholder="Name"
              />
              <TextInput
                className="contact-form-container"
                label="Email"
                withAsterisk
                placeholder="Email"
              />
              <TextInput
                className="contact-form-container"
                label="Phone Number"
                withAsterisk
                placeholder="Phone Number"
              />
              <TextInput
                className="contact-form-container"
                label="Subject"
                withAsterisk
                placeholder="Subject"
              />
              <TextInput
                className="contact-form-container"
                label="Message"
                withAsterisk
                placeholder="Message"
              />
              <Button className="contact-btn" variant="filled">
                Submit
              </Button>
            </div>
            <div className="contact-right-left-image">
              <img className="img" src={ContactImage} />
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.914683598013!2d77.73013377366945!3d8.699652094060202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04135e313d5495%3A0xb07b24533e63b70d!2sAJ%20INFOTECK!5e0!3m2!1sen!2sin!4v1707741640242!5m2!1sen!2sin"
          width="1330"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
