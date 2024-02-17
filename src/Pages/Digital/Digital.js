import React from "react";
import "../Digital/Digital.css";
import BrandingImage from "../../Assets/Digital Marketing/Branding.b68e59f04af712db1bec.jpg";
import LogoImage from "../../Assets/Digital Marketing/LogoDesgin.ec2139fea8e585a1ff08.jpg";
import WebImage from "../../Assets/Digital Marketing/WebDevelopment.947d2ccdf1bac5792df2.jpg";
import AppImage from "../../Assets/Digital Marketing/App.62b89359d204d3717247.jpg";
import SeoImage from "../../Assets/Digital Marketing/Seo.103b20aed76ec3228876.jpg";
import EmailImage from "../../Assets/Digital Marketing/Email.56c4913a70e5c5e11ed5.jpg";
import SmmImage from "../../Assets/Digital Marketing/SocialMedia.7fd333fc5d5a3a65c517.jpg";
import InfluencerMarketingImage from "../../Assets/Digital Marketing/Influncer_marketing2.b25a2e5bb8e06a4add78.jpg";
import GraphicDesignImage from "../../Assets/Digital Marketing/Graphics.38ae5c4d583859f41d64.jpg";
const Digital = () => {
  window.scrollTo(0, 0);
  const Branding = [
    {
      title: "Branding",
      para: `We have a deep understanding of client thoughts. We are the vision of your target customer and build trust. Let us create you as a brand that leaves an enduring conception. Our experts will work closely with you to create engaging and shareable content that connects with your audience. We know the power of social media platforms and will utilize them strategically to expand your brand's reach.We know your business objectives, target market, and competition to develop a comprehensive brand strategy that aligns with your vision. Our strategic approach ensures that every element of your brand communicates a consistent message and reinforces your core values.`,
    },
  ];
  const LogoDesign = [
    {
      title: "Logo Design",
      para1: `Your logo is the index of your business, and we will create a distinctive visual representation that outlines your brand's essence. With our expertise, we'll conceptualize and design a logo that distinguishes you in the market.`,
      para2: `Your logo is the visual cornerstone of your brand. Our creative team crafts exceptional logos that embody the essence of your business. We focus on simplicity, versatility, and timelessness, ensuring that your logo stands the test of time and makes a lasting impression.`,
    },
  ];
  const WebDevelopment = [
    {
      title: "Web Development",
      para1: `Your logo is the index of your business, and we will create a distinctive visual representation that outlines your brand's essence. With our expertise, we'll conceptualize and design a logo that distinguishes you in the market.`,
      para2: `Your logo is the visual cornerstone of your brand. Our creative team crafts exceptional logos that embody the essence of your business. We focus on simplicity, versatility, and timelessness, ensuring that your logo stands the test of time and makes a lasting impression.`,
    },
  ];
  const AppDevelopment = [
    {
      title: "App Development",
      para: `Utilize the power of social media to increase brand awareness, drive traffic, and strengthen relationships with your target audience. Our customized strategies and compelling content will amplify your online presence, connect you with potential customers, and boost your business.Our social media marketing experts will develop a customized strategy to amplify your brand presence across various social media channels. We create engaging content, run targeted ad campaigns, and analyze data to optimize your social media performance and increase brand awareness. From content creation and community management to targeted advertising campaigns, we made our approach to suit your business objectives and maximize your social media presence.`,
    },
  ];
  const SEO = [
    {
      title: "SEO",
      para: `Search Engine Optimization (SEO) is not just a word for us- it's our expertise. We will Optimize your website, ensuring that it ranks highly in Search engine results driving organic traffic and increasing your Online Visibility.Our SEO experts are well-versed in the latest algorithms and techniques to optimize your website's visibility and improve its search engine rankings. Through comprehensive keyword research, on-page optimization, link building, and content strategy, we ensure that your website stands out in the competitive digital world.`,
    },
  ];
  const EmailMarketing = [
    {
      title: "Email Marketing",
      para: `AJ infoteck offers customized email marketing strategies to reach and engage your target audience effectively.Email marketing remains one of the most effective ways to engage with your audience and nurture leads. Our team can help you create targeted email campaigns that drive customer engagement and conversions. We optimize your email marketing efforts for maximum results.`,
    },
  ];
  const SMM = [
    {
      title: "Social Media Marketing",
      para: `Utilize the power of social media to increase brand awareness, drive traffic, and strengthen relationships with your target audience. Our customized strategies and compelling content will amplify your online presence, connect you with potential customers, and boost your business.Our social media marketing experts will develop a customized strategy to amplify your brand presence across various social media channels. We create engaging content, run targeted ad campaigns, and analyze data to optimize your social media performance and increase brand awareness. From content creation and community management to targeted advertising campaigns, we made our approach to suit your business objectives and maximize your social media presence.`,
    },
  ];
  const InfluencerMarketing = [
    {
      title: "Influencer Marketing",
      para: `Tap into the influential power of key personalities in your industry to promote your brand and products. With our expertise in identifying and partnering with relevant influencers, your message will reach a wider audience, creating brand engagement`,
    },
  ];
  const GraphicDesign = [
    {
      title: "Graphic Design",
      para: `With our graphic designing expertise, we provide visually appealing content that captures the attention of your target audience. Capture and engage your audience with visually stunning, professionally designed graphics that set your brand apart. Our talented designers will create captivating images, illustrations, and layouts that grab attention, convey your message, and leave a lasting impression.Visual communication is key to capturing your audience's attention. Our talented graphic designers create stunning visuals that align with your brand's aesthetics and effectively convey your message.`,
    },
  ];
  return (
    <div>
      <div className="digital-marketing-page">
        <div className="digital-marketing-page-title-container">
          <h1>Our Services</h1>
        </div>
        <div className="top-order-container">
          {Branding.map((value, index) => {
            return (
              <div className="branding-container" key={index}>
                <img className="img" src={BrandingImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {LogoDesign.map((value, index) => {
            return (
              <div className="logo-container" key={index}>
                <img className="img" src={LogoImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            );
          })}
          {WebDevelopment.map((value, index) => {
            return (
              <div className="web-container" key={index}>
                <img className="img" src={WebImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            );
          })}
        </div>
        <div className="middle-order-container">
          {AppDevelopment.map((value, index) => {
            return (
              <div className="app-container" key={index}>
                <img className="img" src={AppImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {SEO.map((value, index) => {
            return (
              <div className="seo-container" key={index}>
                <img className="img" src={SeoImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {EmailMarketing.map((value, index) => {
            return (
              <div className="email-container" key={index}>
                <img className="img" src={EmailImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
        <div className="bottom-order-container">
          {SMM.map((value, index) => {
            return (
              <div className="social-media-container" key={index}>
                <img className="img" src={SmmImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {InfluencerMarketing.map((value, index) => {
            return (
              <div className="influencer-marketing-container" key={index}>
                <img
                  className="img"
                  src={InfluencerMarketingImage}
                  alt="image"
                />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {GraphicDesign.map((value, index) => {
            return (
              <div className="graphic-design-container" key={index}>
                <img className="img" src={GraphicDesignImage} alt="image" />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Digital;
