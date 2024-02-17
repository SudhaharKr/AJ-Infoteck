import React from "react";
import "../BPO/BPO.css";
import VoiceProcessImage from "../../Assets/BPO/BpoVoice.270618c6f6f8719a250c.jpg";
import NonVoiceProcessImage from "../../Assets/BPO/BpoNonVoice.95a1cb98227ad37ec3e7.jpg";
import DataEntryProcessImage from "../../Assets/BPO/DataEntry.ce508c8a661d3a32cd63.jpg";
const BPO = () => {
  window.scrollTo(0, 0);
  const VoiceProcess = [
    {
      title: "Voice Process",
      para1:
        "Our BPO firm provides a variety of speech process solutions to assist businesses in a variety of industries. We have a staff of highly qualified and experienced individuals who work hard to deliver exceptional customer service, sales support, and other services to our clients. We are your go-to service provider for inbound and outbound call center services. Our cutting-edge technologies and personalized solutions enable us to exceed expectations and assist you in improving the image of your company.",
      para2:
        "BPO operations include voice process services as a crucial component. They entail handling incoming and outgoing calls to deliver top-notch customer service, sales support, and other services. BPO firms provide various services, including answering consumer questions, resolving complaints, making sales calls, conducting surveys, and providing technical assistance. Utilizing cutting-edge communication technology ensures effective call management and enables businesses to offer 24/7 service to their international clients. By outsourcing their voice activities, businesses can drastically lower operational expenses, increase customer satisfaction, and concentrate on their core skills.",
    },
  ];
  const NonVoiceProcess = [
    {
      title: "Non-Voice Process",
      para1:
        "Our non-voice process solutions are intended to help you streamline and digitize your business processes. We provide a range of back-office and front-office support services to assist you in reducing costs and optimizing operations. Email support, chat support, social media management, and other non-voice process services are available. We use cutting-edge technology and software to provide high-quality, effective services.",
      para2:
        "Non-voice process services, provided by BPO firms, cover a broad range of tasks that don't directly involve speaking with consumers over the phone. These services include back-office assistance, email support, chat support, social media management, data processing, and content moderation. BPO businesses work with competent personnel who complete these activities precisely and effectively. Companies can save time and money by outsourcing non-voice tasks while also gaining access to the knowledge and scalability of BPO service providers. This enables firms to refocus their resources on meaningful projects and essential operations, eventually leading to higher productivity and growth",
    },
  ];
  const DataEntryProcess = [
    {
      title: "Data Entry",
      para1:
        "We understand the significance of data quality and reliability at our BPO firm. Our data entry services are intended to assist you in managing and streamlining your data-related chores. Our data entry experts are capable of performing a wide range of data entry tasks, including online data input, image data entry, and more. We provide cost-effective solutions while ensuring quick and precise data input services. Please contact us if you have any unique requirements or inquiries. Our staff is dedicated to offering the best BPO services for your company",
      para2:
        "Data management that is accurate and dependable is critical for firms in every industry. BPO businesses' data entry services assist organizations streamline their data-related duties while also ensuring data correctness and integrity. Online data entry, image data entry, data capture, data purification, and database migration are all handled by skilled data entry experts. Businesses can free up key resources, cut operating expenses, and focus on using data to make educated decisions by outsourcing these duties. To ensure confidentiality and compliance with data protection rules, BPO service providers use advanced technology and data security procedures.",
    },
  ];
  return (
    <div>
      <div className="bpo-page">
        <div className="bpo-page-sec1-container">
          <img className="img" src={VoiceProcessImage} />

          {VoiceProcess.map((value, index) => {
            return (
              <div className="voice-process" key={index}>
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            );
          })}
        </div>
        <div className="bpo-page-sec2-container">
          {NonVoiceProcess.map((value, index) => {
            return (
              <div className="non-voice-process" key={index}>
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            );
          })}
          <img className="img" src={NonVoiceProcessImage} />
        </div>
        <div className="bpo-page-sec3-container">
            <img className="img" src={DataEntryProcessImage}/>
          {DataEntryProcess.map((value, index) => {
            return (
              <div className="data-entry-process" key={index}>
                <h1>{value.title}</h1>
                <p>{value.para1}</p>
                <p>{value.para2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BPO;
