import { useState, useRef } from "react";
import Testimonial from "./Testimonial";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const testimonialsData = [
  {
    userImage: user_1,
    userName: "María González",
    userLocation: "Edusity, USA",
    message:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  },
  {
    userImage: user_2,
    userName: "Raj Patel",
    userLocation: "Edusity, USA",
    message:
      "Opting to study at Edusity was a game-changer for me. The incredible faculty, cutting-edge resources, and dedication to student success have far surpassed what I had hoped for. It's been an outstanding experience from start to finish."
  },
  {
    userImage: user_3,
    userName: "Emily Johnson",
    userLocation: "Edusity, USA",
    message:
      "Choosing Edusity for my studies has been a phenomenal decision. The vibrant community, advanced technology, and focus on providing top-notch education have gone beyond my expectations. I couldn't be more pleased with my choice."
  },
  {
    userImage: user_4,
    userName: "Michael Smith",
    userLocation: "Edusity, USA",
    message:
      "Deciding to enroll at Edusity was one of the best choices I've ever made. The excellent support system, modern facilities, and unwavering commitment to quality education have truly impressed me. This journey has exceeded all my expectations."
  }
];

const TestimonialSlider = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    setTx((prevTx) => (prevTx > -75 ? prevTx - 25 : 0)); // Updated range
  };

  const slideBackward = () => {
    setTx((prevTx) => (prevTx < 0 ? prevTx + 25 : -75)); // Updated range
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
          {testimonialsData.map((testimonial, index) => (
            <li key={index}>
              <Testimonial {...testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialSlider;
