import React from "react";
import "../About/About.css";
import TeamWork from "../../Assets/About/TeamWork.6f20187356ca66144b14.jpg";
import circle from "../../Assets/About/Circle.f14ae2238864a33e83e9.png";
import HomePic from "../../Assets/About/HomePic1.84437258534c0cde5bc4.jpg";
const About = () => {
  window.scrollTo(0, 0);
  const LeftContainer = [
    {
      title: "Your Gateway to Digital Success find out the key to the World",
      para1: `We are the windows to the digital world. We strive to enrich your business, enhance your brand image, and drive customer engagement and conversions. With our strategies and innovative approaches, we ensure your success in today's competitive digital world`,
      para2: `Using tried and tested methods in digital marketing like social media and SEO, we are eager to take your brand to the next level. Reach out to your customers in relevant ways through different platforms and raise your online visibility.`,
    },
  ];
  const OurHistory = [
    {
      title: "Our History",
      para: `AJ INFOTECK was established in 2022,December. From its inception, we set out on a mission to revolutionize the IT industry by providing cutting-edge solutions that cater to our clients' specific needs. Over the years, we have grown into a leading player in the market, with a diverse portfolio of successful projects and a satisfied clientele.`,
    },
  ];
  const GrowthExpansion = [
    {
      title: "Growth and Expansion",
      para: `Through continuous innovation and a commitment to understanding our clients' evolving requirements, we have achieved steady growth and expanded our presence across Tirunelveli, Tamil Nadu. Our ability to adapt to changing technologies and trends has allowed us to stay ahead of the curve and provide tailored solutions that drive success for our clients.`,
    },
  ];
  const Vision = [
    {
      title: "Vision for the Future",
      para: `Looking ahead, we envision AJ INFOTECK as the go-to partner for transformative IT solutions across diverse industries. By harnessing the power of emerging technologies, we aim to lead the way in delivering solutions that drive our clients' success. Our focus on client-centricity and innovation will remain at the heart of our endeavors`,
    },
  ];
  const LeftContent = [
    {
      title: "We are Best",
      para: "At AJ INFOTECK, we harness our expertise and extensive experience to craft technologies that make a tangible impact on the present and shape a brighter future. Our commitment to excellence, unwavering integrity in fulfilling promises, and ever-expanding reservoir of knowledge form the bedrock of every project we undertake.",
    },
  ];
  const QualityProduct = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-sec3-grid-card-icon"
          width="40"
          height="40"
          color="#e6166a"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
          <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
        </svg>
      ),
      title: "Quality Products",
      para: "At , our foremost commitment is to deliver secure and top-quality products that cater to all your business needs.",
    },
  ];
  const Innovation = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-sec3-grid-card-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          color="#e6166a"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="7 8 3 12 7 16"></polyline>
          <polyline points="17 8 21 12 17 16"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      ),
      title: "Innovation",
      para: "At AJ INFOTECK, we thrive on embracing innovative approaches to problem-solving, exploring diverse avenues to overcome challenges effectively.",
    },
  ];
  const CustomerFriendly = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-sec3-grid-card-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          color="#e6166a"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"></path>
          <path d="M11.683 12.317l5.759 -5.759"></path>
          <circle cx="5.5" cy="5.5" r="1.5"></circle>
          <circle cx="18.5" cy="5.5" r="1.5"></circle>
          <circle cx="18.5" cy="18.5" r="1.5"></circle>
          <circle cx="8.5" cy="15.5" r="4.5"></circle>
        </svg>
      ),
      title: "Customer Friendly",
      para: "At AJ INFOTECK, we take immense pride in our role as a partner, helping customers meet their unique requirements and bring their ideas to life.",
    },
  ];
  const TimelyDelivery = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-sec3-grid-card-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          color="#e6166a"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
          <circle cx="18" cy="18" r="4"></circle>
          <path d="M15 3v4"></path>
          <path d="M7 3v4"></path>
          <path d="M3 11h16"></path>
          <path d="M18 16.496v1.504l1 1"></path>
        </svg>
      ),
      title: "Timely Delivery",
      para: "At AJ INFOTECK, we prioritize the utmost quality, accuracy, and reliability of all our deliverables, ensuring excellence at every step of our processes.",
    },
  ];
  return (
    <div>
      <div className="about-page">
        <div className="about-page-title-container">
          <h1 className="about">
            About <span className="span">AJ INFOTECK</span>
          </h1>
        </div>
        <div className="about-page-sec1-container">
          {LeftContainer.map((value, index) => {
            return (
              <div className="leftside-container" key={index}>
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
                <button className="btn">
                  <a href="#/digital-marketing">our services</a>
                </button>
              </div>
            );
          })}
          <img className="image" src={TeamWork} alt="image" />
        </div>
        <div className="about-page-sec2-container">
          <div className="three-main-container-boxes">
            {OurHistory.map((value, index) => {
              return (
                <div className="div1" key={index}>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {GrowthExpansion.map((value, index) => {
              return (
                <div className="div2" key={index}>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {Vision.map((value, index) => {
              return (
                <div className="div2" key={index}>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-page-sec3-container">
          {LeftContent.map((value, index) => {
            return (
              <div className="sec3-leftside-container" key={index}>
                <h1>{value.title}</h1>
                <p>{value.para}</p>
                <div className="animation-rotate">
                  <img className="rotate" src={circle} alt="animation-circle" />
                </div>
                <img className="pic" src={HomePic} alt="pic" />
              </div>
            );
          })}
          <div className="sec3-rightside-container">
            <div className="sec3-top">
              <div className="quality-box1">
                {QualityProduct.map((value, index) => {
                  return (
                    <div className="product" key={index}>
                      <icon>{value.icon}</icon>
                      <h3>{value.title}</h3>
                      <p>{value.para}</p>
                    </div>
                  );
                })}
              </div>
              <div className="quality-box2">
                {Innovation.map((value, index) => {
                  return (
                    <div className="innovation" key={index}>
                      <icon>{value.icon}</icon>
                      <h3>{value.title}</h3>
                      <p>{value.para}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sec3-bottom">
              <div className="quality-box3">
                {CustomerFriendly.map((value, index) => {
                  return (
                    <div className="customer" key={index}>
                      <icon>{value.icon}</icon>
                      <h3>{value.title}</h3>
                      <p>{value.para}</p>
                    </div>
                  );
                })}
              </div>
              <div className="quality-box4">
                {TimelyDelivery.map((value, index) => {
                  return (
                    <div className="delivery" key={index}>
                      <icon>{value.icon}</icon>
                      <h3>{value.title}</h3>
                      <p>{value.para}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
