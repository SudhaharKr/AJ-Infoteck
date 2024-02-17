import React from "react";
import "../Home/Home.css";
import CountUp from "react-countup";
import circle from "../../Assets/Home/Circle.f14ae2238864a33e83e9.png";
import HomePic from "../../Assets/Home/HomePic2.0a4893421f4eb80a395c.jpg";
import BestPic from "../../Assets/Home/Best.f61c7a5ff53fd254f633.jpg";
import RightImage from "../../Assets/Home/HomePic3.b2a4c0f434830016df11.jpg";
import BpoImage from "../../Assets/Home/BpoVoice.270618c6f6f8719a250c.jpg";
const Home = () => {
  window.scrollTo(0, 0);
  const RightSectionContainer = [
    {
      title: `Digital Landscape with AJ InfoTeck 's Expert Marketing Strategies`,
      para: `We are the windows to the digital world. We strive to enrich your business, enhance your brand image, and drive customer engagement and conversions. With our strategies and innovative approaches, we ensure your success in today's competitive digital world.`,
    },
  ];
  const Table1Container = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="home-icon-hover-home-grid"
          width="24"
          height="24"
          color="green"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
        </svg>
      ),
      title: "Customer Friendly",
      para: "Helping Customers to meet their requirments and ideas.",
    },
  ];
  const Table2Container = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icons-hover-home-grid"
          width="24"
          height="24"
          color="#ff8da0"
          viewBox="0 0 24 24"
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
      title: "Quality Products",
      para: "Providing secure and quality products to all your business.",
    },
  ];
  const Table3Container = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icons-hover-home-grid"
          width="24"
          height="24"
          color="green"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
          <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
          <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
        </svg>
      ),
      title: "Innovativeness",
      para: "Trying new approaches to solve problems in all ways.",
    },
  ];
  const Table4Container = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icons-hover-home-grid"
          width="24"
          height="24"
          color="#ff5d5d"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 16l6 -7l5 5l5 -6"></path>
          <circle cx="15" cy="14" r="1"></circle>
          <circle cx="10" cy="9" r="1"></circle>
          <circle cx="4" cy="16" r="1"></circle>
          <circle cx="20" cy="8" r="1"></circle>
        </svg>
      ),
      title: "Timely Delivery",
      para: "Ensuring quality, accuracy and reliability of deliverables.",
    },
  ];
  const RightSectContainer = [
    {
      title: "Find out the key to the World",
      para: "Our full-service team of inmakes professionals are ready here to help you.",
    },
  ];
  const LeftContainer = [
    {
      title: "Your Gateway to Digital Success",
      para1: `We have a deep understanding of client thoughts. We are the vision of your target customer and build trust. Let us create you as a brand that leaves an enduring conception. Our experts will work closely with you to create engaging and shareable content that connects with your audience. We know the power of social media platforms and will utilize them strategically to expand your brand's reach.`,
      para2:
        "We know your business objectives, target market, and competition to develop a comprehensive brand strategy that aligns with your vision. Our strategic approach ensures that every element of your brand communicates a consistent message and reinforces your core values.",
    },
  ];
  const RightContent = [
    {
      title: "BPO Services",
      para1:
        "Our BPO firm provides a variety of speech process solutions to assist businesses in a variety of industries. We have a staff of highly qualified and experienced individuals who work hard to deliver exceptional customer service, sales support, and other services to our clients. We are your go-to service provider for inbound and outbound call center services. Our cutting-edge technologies and personalized solutions enable us to exceed expectations and assist you in improving the image of your company.",
      para2:
        "Our non-voice process solutions are intended to help you streamline and digitize your business processes. We provide a range of back-office and front-office support services to assist you in reducing costs and optimizing operations. Email support, chat support, social media management, and other non-voice process services are available. We use cutting-edge technology and software to provide high-quality, effective services.",
    },
  ];
  const TopContainerBox1 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icons-hover-home-grid"
          width="24"
          height="24"
          color="#e6166a"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
        </svg>
      ),
      title: "Highly Qualified Team",
      para: "We have a highly skilled team to assist our clients in getting what they need and anticipate.",
    },
  ];
  const TopContainerBox2 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sec5-container-grid-icon"
          width="24"
          height="24"
          color="#e6166a"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 8h8v8h-8z"></path>
          <path d="M4 4v.01"></path>
          <path d="M8 4v.01"></path>
          <path d="M12 4v.01"></path>
          <path d="M16 4v.01"></path>
          <path d="M20 4v.01"></path>
          <path d="M4 20v.01"></path>
          <path d="M8 20v.01"></path>
          <path d="M12 20v.01"></path>
          <path d="M16 20v.01"></path>
          <path d="M20 20v.01"></path>
          <path d="M20 16v.01"></path>
          <path d="M20 12v.01"></path>
          <path d="M20 8v.01"></path>
          <path d="M4 16v.01"></path>
          <path d="M4 12v.01"></path>
          <path d="M4 8v.01"></path>
        </svg>
      ),
      title: "Technology Consultation",
      para: "We offer technological consulting to help choose the best technology for a specific need.",
    },
  ];
  const BottomContainerBox3 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="support-icon-container-grid-icon"
          width="24"
          height="24"
          color="#e6166a"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="4" y="4" width="6" height="6" rx="1"></rect>
          <rect x="14" y="4" width="6" height="6" rx="1"></rect>
          <rect x="4" y="14" width="6" height="6" rx="1"></rect>
          <rect x="14" y="14" width="6" height="6" rx="1"></rect>
        </svg>
      ),
      title: "Customer Support",
      para: "All of our clients receive committed, 24/7 customer support that is simple to obtain.",
    },
  ];
  const BottomContainerBox4 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-icon-tabler-icon-tabler-shield"
          width="24"
          height="24"
          color="#e6166a"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
        </svg>
      ),
      title: "Safe and Secure",
      para: "All of our customers receive extremely safe and secure products from us.",
    },
  ];
  const Count1Container = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="usersicon icon-tabler icon-tabler-users-group"
          width="3rem"
          height="3rem"
          color="#0F089F"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <div className="home-page">
        <div className="home-page-sec1-container">
          <div className="home-page-left-section-container">
            <div className="animation-rotate">
            <img src={circle} alt="Circle_img" class="rotate"/>
            </div>
            <img className="pic" src={HomePic} alt="pic" />
          </div>
          <div className="home-page-right-section-container">
            {RightSectionContainer.map((value, index) => {
              return (
                <div key={index}>
                  <h1>{value.title}</h1>
                  <p>{value.para}</p>
                  <button className="btn">
                    <a href="#/about">About Us</a>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-page-sec2-container">
          <div className="home-page-sec2-container-table">
            {Table1Container.map((value, index) => {
              return (
                <div className="table1" key={index}>
                  <icon className="icon1">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {Table2Container.map((value, index) => {
              return (
                <div className="table2" key={index}>
                  <icon className="icon2">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {Table3Container.map((value, index) => {
              return (
                <div className="table3" key={index}>
                  <icon className="icon3">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {Table4Container.map((value, index) => {
              return (
                <div className="table4" key={index}>
                  <icon className="icon4">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-page-sec3-container">
          <div className="home-page-left-section-container">
            <div className="animation-rotate">
              <img className="rotate" src={circle} alt="animation-circle" />
            </div>
            <img className="BestPic" src={BestPic} alt="pic" />
          </div>
          <div className="home-page-right-section-container">
            {RightSectContainer.map((value, index) => {
              return (
                <div className="right-container" key={index}>
                  <h1>{value.title}</h1>
                  <p>{value.para}</p>
                </div>
              );
            })}
            <div className="box-containers">
              <div className="left-side-boxes">
                <p className="para1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sec3-container-right-grid-icon"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
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
                  </svg>{" "}
                  Web App Development
                </p>
                <p className="para2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sec3-container-right-grid-icon"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="6" y="3" width="12" height="18" rx="2"></rect>
                    <line x1="11" y1="4" x2="13" y2="4"></line>
                    <line x1="12" y1="17" x2="12" y2="17.01"></line>
                  </svg>{" "}
                  Desktop App development
                </p>
                <p className="para3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sec3-container-right-grid-icon"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                    <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                    <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                    <line x1="4" y1="20" x2="18" y2="20"></line>
                  </svg>{" "}
                  Branding
                </p>
                <p className="para4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sec3-container-right-grid-icon"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6"></path>
                    <path d="M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5"></path>
                    <path d="M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5"></path>
                  </svg>{" "}
                  Web Designing
                </p>
              </div>
              <div className="right-side-boxes">
                <p className="para5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sec3-container-right-grid-icon"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="6" y="3" width="12" height="18" rx="2"></rect>
                    <line x1="11" y1="4" x2="13" y2="4"></line>
                    <line x1="12" y1="17" x2="12" y2="17.01"></line>
                  </svg>{" "}
                  Mobile App Development
                </p>
                <p className="para6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sec3-container-right-grid-icon"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                    <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                    <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                    <line x1="4" y1="20" x2="18" y2="20"></line>
                  </svg>{" "}
                  Digital Marketing
                </p>
                <p className="para7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>{" "}
                  Software support
                </p>
                <p className="para8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-circle-check"
                    width="24"
                    height="24"
                    color="#e6166a"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>{" "}
                  UI/UX Designing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-sec4-container">
          <div className="left-side-content">
            {LeftContainer.map((value, index) => {
              return (
                <div className="content" key={index}>
                  <h1>{value.title}</h1>
                  <p className="p1">{value.para1}</p>
                  <p className="p2">{value.para2}</p>
                  <button className="btn">
                    <a href="#/about">Learn More</a>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="right-side-image">
            <div className="animation-rotate">
              <img className="rotate" src={circle} alt="animation-circle" />
            </div>
            <img className="RightImage" src={RightImage} alt="img" />
          </div>
        </div>
        <div className="home-page-sec5-container">
          <div className="left-side-image">
            <div className="animation-rotate">
              <img className="rotate" src={circle} alt="animation-circle" />
            </div>
            <img className="RightImage" src={BpoImage} alt="img" />
          </div>
          <div className="right-side-content">
            {RightContent.map((value, index) => {
              return (
                <div className="right-content" key={index}>
                  <h1>{value.title}</h1>
                  <p className="p1">{value.para1}</p>
                  <p className="p2">{value.para2}</p>
                  <button className="btn">
                    <a href="#/bpo">Learn More</a>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-page-sec6-container">
          <h1>What Makes Us Special</h1>
          <div className="top-box">
            {TopContainerBox1.map((value, index) => {
              return (
                <div className="box1" key={index}>
                  <icon className="home-icon">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {TopContainerBox2.map((value, index) => {
              return (
                <div className="box2" key={index}>
                  <icon className="home-icon">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
          </div>
          <div className="bottom-box">
            {BottomContainerBox3.map((value, index) => {
              return (
                <div className="box3" key={index}>
                  <icon className="bottom-icon">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
            {BottomContainerBox4.map((value, index) => {
              return (
                <div className="box4" key={index}>
                  <icon className="bottom-icon">{value.icon}</icon>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-page-sec7-container">
          <div className="wrapper">
            <div className="count-contianer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="usericon icon-tabler icon-tabler-users-group"
                width="50"
                height="50"
                color="#0f089f"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
              </svg>
              <span className="num" style={{ fontSize: "2rem" }}>
                <CountUp start={0} end={100} duration={3} />
              </span>
              <span className="text">Team Size</span>
            </div>
            <div className="count-contianer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hearticon icon-tabler icon-tabler-heart-handshake"
                width="50"
                height="50"
                color="#0f089f"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                <path d="M12.5 15.5l2 2" />
                <path d="M15 13l2 2" />
              </svg>
              <span className="num" style={{ fontSize: "2rem" }}>
                <CountUp start={0} end={150} duration={3} />
              </span>
              <span className="text">Happy Clients</span>
            </div>
            <div className="count-contianer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="certificateicon icon-tabler icon-tabler-certificate"
                width="50"
                height="50"
                color="#0f089f"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                <path d="M6 9l12 0"></path>
                <path d="M6 12l3 0"></path>
                <path d="M6 15l2 0"></path>
              </svg>
              <span className="num" style={{ fontSize: "2rem" }}>
                <CountUp start={0} end={800} duration={3} />
              </span>
              <span className="text">Completed Projects</span>
            </div>
            <div className="count-contianer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stackshareicon icon-tabler icon-tabler-brand-stackshare"
                width="50"
                height="50"
                color="#0f089f"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M19 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M7 12h3l3.5 6h3.5"></path>
                <path d="M17 6h-3.5l-3.5 6"></path>
              </svg>
              <span className="num" style={{ fontSize: "2rem" }}>
                <CountUp start={0} end={26} duration={3} />
              </span>
              <span className="text">Upcoming Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
