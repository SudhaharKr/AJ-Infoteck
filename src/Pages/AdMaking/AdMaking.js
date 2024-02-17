import React from "react";
import "../AdMaking/AdMaking.css";
import AdMakingImage from "../../Assets/Ad Making/AdMaking.d6f6f304228082c51f97.jpg";
import CinemaShootImage from "../../Assets/Ad Making/Cinema.2cff238b5b9061dc590e.jpg";
import GraphicsandVFXImage from "../../Assets/Ad Making/VFX.a422f9a216c89a875ca4.jpg";
import PostProductionImage from "../../Assets/Ad Making/Post.1748d5623b8474a7f4b4.jpg";
import VoiceOverImage from "../../Assets/Ad Making/Voice.b6b3248da33cfb5236e9.jpg";
import FlexPrintImage from "../../Assets/Ad Making/Jingles.be57734a6662b06ae6d6.jpg";
const AdMaking = () => {
  window.scrollTo(0, 0);
  const AdMakingContainer = [
    {
      title: "Advertisement Making and Designing",
      para1: `Our advertisement-making and designing services seize your audience's attention with captivating stories, transformative visuals, and professional post-production, elevating your brand to new heights. , we offer a wide range of services to enhance your brand.`,
      para2: `From captivating voice-overs to catchy jingles and eye-catching flex prints, we have the expertise to elevate your business to the potential audience. By understanding your brand and target audience, we will create a concept that aligns with your objectives and resonates with your viewers.`,
    },
  ];
  const CinemaShoot = [
    {
      title: "Cinematic Video Shoot",
      para: "Our experienced team of videographers and cinematographers is dedicated to capturing your vision and bringing it to life on the screen. We have the skills and expertise to deliver high-quality results that exceed your expectations. We use state-of-the-art equipment and techniques to ensure that every shot is visually stunning and impactful.",
    },
  ];
  const GraphicsandVFX = [
    {
      title: "cgi Graphics and VFX",
      para: "With our CGI graphics and VFX services, we can turn your imaginations into visually stunning realities. Our experienced team of artists and animators are well-versed in the latest CGI techniques, allowing us to create jaw-dropping graphics and seamless visual effects that elevate your brand advertisement to the next level. Whether you need realistic 3D models, product visualizations, or virtual environments, we can bring your vision to life with our photorealistic CGI capabilities.",
    },
  ];
  const PostProduction = [
    {
      title: "Post-Production",
      para: "At AJ InfoTeck , we understand the importance of post-production in creating a professional video. Our post-production services encompass everything from video editing and color grading to audio mixing and final touches. We strive to deliver a final product that not only meets but exceeds your expectations.Our post-production services encompass everything from video editing and color grading to sound design and final mastering. We understand the importance of engaging your audience. With our attention to detail and creative approach, we ensure that your videos are polished and professional, leaving an enduring impact on viewers.",
    },
  ];
  const VoiceOver = [
    {
      title: "Voice Over",
      para: "Fascinate your viewers with professional voice-over narration that adds depth. Our voice-over artists are skilled at delivering a wide range of styles and tones, ensuring that your message is conveyed effectively and convincingly.To add an impressive voice to your videos, we provide top-notch voice-over services. Our talented voice-over artists offer a diverse range of styles and accents to suit your project's requirements. Whether you need a voice-over for a corporate, commercial, or narration, we will help you find the perfect voice that resonates with your target audience.",
    },
  ];
  const FlexPrint = [
    {
      title: "Jingle and Flex Print",
      para: "A memorable jingle can make your brand stand out from your audience. Our team of talented technicians creates catchy and original jingles that reflect your brand's personality.Make your brand memorable with jingles and soundtracks that resonate with your audience. Create a visual impact with our high-quality flex prints. Whether it's banners, posters, or other promotional materials which are durable, vibrant, and designed to attract attention. With our attention to detail and commitment to quality, you can rest assured that your brand will be represented in the best possible light .",
    },
  ];
  return (
    <div>
      <div className="ad-making-page">
        <div className="ad-making-page-sec1-container">
          <img className="sec1-image" src={AdMakingImage} />
          {AdMakingContainer.map((value, index) => {
            return (
              <div className="section1-admaking-container" key={index}>
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            );
          })}
        </div>
        <div className="ad-making-page-sec2-container">
          <h1>Our Services</h1>
        </div>
        <div className="toporder-container">
          {CinemaShoot.map((value, index) => {
            return (
              <div className="cinematic-shoot" key={index}>
                <img className="image1" src={CinemaShootImage} />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {GraphicsandVFX.map((value, index) => {
            return (
              <div className="graphics-and-vfx" key={index}>
                <img className="image2" src={GraphicsandVFXImage} />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {PostProduction.map((value, index) => {
            return (
              <div className="post-production" key={index}>
                <img className="image3" src={PostProductionImage} />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
        </div>
        <div className="bottomorder-container">
          {VoiceOver.map((value, index) => {
            return (
              <div className="voice-over" key={index}>
                <img className="image4" src={VoiceOverImage} />
                <h1>{value.title}</h1>
                <p>{value.para}</p>
              </div>
            );
          })}
          {FlexPrint.map((value, index) => {
            return (
              <div className="flex-print" key={index}>
                <img className="image5" src={FlexPrintImage} />
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

export default AdMaking;
