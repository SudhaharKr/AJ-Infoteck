import React from "react";
import "../Footer/Footer.css";
import { NavLink } from "react-router-dom";
import LogoImage from "../../Assets/LogoAJ..png";
import Facebook from "../../Assets/Footer/download.png";
import Instagram from "../../Assets/Footer/download (1).png";
const Footer = () => {
  const AboutBox = [
    {
      title: "About AJ Infoteck",
      para: `Dominate the Digital Landscape with AJ InfoTeck 's Expert Marketing Strategies. Your Gateway to Digital Success Find out the key to the World`,
      Contact: "Contact :- +91 8122788484",
    },
  ];
  const QuickLinks = [
    {
      title: "Quick Links",
    },
  ];
  const Address = [
    {
      title: "Address",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="map-pin-icon icon-tabler icon-tabler-map-pin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
      ),
      para: `3/1A, 2nd Floor, STC College Road, Perumalpuram, Tirunelveli - 627 007, Tamil Nadu.`
    },
  ];
  return (
    <div>
      <div className="footer-page">
        <div className="footer-page-sec1-container">
          <img className="footer-image" src={LogoImage} />
          {AboutBox.map((value, index) => {
            return (
              <div className="about-section" key={index}>
                <h3>{value.title}</h3>
                <p>{value.para}</p>
                <p>{value.Contact}</p>
                <img className="soc-med" src={Facebook} />
                <img className="soc-med" src={Instagram} />
              </div>
            );
          })}
          {QuickLinks.map((value, index) => {
            return (
              <div className="quick-links" key={index}>
                <h3>{value.title}</h3>
                <ul className="footer-menu">
                <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/digital-marketing">Digital Marketing</NavLink>
            </li>
            <li>
              <NavLink to="/Ad's-making">AD'S Making</NavLink>
            </li>
            <li>
              <NavLink to="/Bpo">BPO</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
                </ul>
              </div>
            );
          })}
          {Address.map((value,index)=>{
            return(
                <div className="footer-address-container" key={index}>
                    <h3>{value.title}</h3>
                    <icon>{value.icon}</icon>
                    <p>{value.para}</p>
                    </div>
            )
          })}
        </div>
        <div className="footer-page-sec2-container">
<p>@2023 AJ INFOTECK. All Rights Reserved. Designed by <span className="span">AJ INFOTECK</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
