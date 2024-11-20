import { useRef } from 'react';
import PropTypes from 'prop-types';
import Testimonial from "./Testimonial";
import user_1 from "../../../assets/user-1.png";
import user_2 from "../../../assets/user-2.png";
import user_3 from "../../../assets/user-3.png";
import user_4 from "../../../assets/user-4.png";

const testimonialsData = [
    {
      id: 1,
      userImage: user_1,
      userName: "María González",
      userLocation: "Edusity, USA",
      message:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 2,
      userImage: user_2,
      userName: "Raj Patel",
      userLocation: "Edusity, USA",
      message:
        "Opting to study at Edusity was a game-changer for me. The incredible faculty, cutting-edge resources, and dedication to student success have far surpassed what I had hoped for. It's been an outstanding experience from start to finish.",
    },
    {
      id: 3,
      userImage: user_3,
      userName: "Emily Johnson",
      userLocation: "Edusity, USA",
      message:
        "Choosing Edusity for my studies has been a phenomenal decision. The vibrant community, advanced technology, and focus on providing top-notch education have gone beyond my expectations. I couldn't be more pleased with my choice.",
    },
    {
      id: 4,
      userImage: user_4,
      userName: "Michael Smith",
      userLocation: "Edusity, USA",
      message:
        "Deciding to enroll at Edusity was one of the best choices I've ever made. The excellent support system, modern facilities, and unwavering commitment to quality education have truly impressed me. This journey has exceeded all my expectations.",
    },
  ];

const Slider = ({ tx }) => {
  const slider = useRef();
  return (
    <div className="slider">
      <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
        {testimonialsData.map(testimonial => (
          <li key={testimonial.id}>
            <Testimonial {...testimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Slider.propTypes = {
  tx: PropTypes.number.isRequired
};

export default Slider;
