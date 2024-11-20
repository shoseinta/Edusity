import program_1 from "../../../assets/program-1.png";
import program_2 from "../../../assets/program-2.png";
import program_3 from "../../../assets/program-3.png";
import program_icon_1 from "../../../assets/program-icon-1.png";
import program_icon_2 from "../../../assets/program-icon-2.png";
import program_icon_3 from "../../../assets/program-icon-3.png";
import user_1 from "../../../assets/user-1.png";
import user_2 from "../../../assets/user-2.png";
import user_3 from "../../../assets/user-3.png";
import user_4 from "../../../assets/user-4.png";

export const inputsData = [
    {
      id: 1,
      label: "Your Name",
      type: "text",
      nameAttr: "name",
      placeholderAttr: "Enter Your Name",
    },
    {
      id: 2,
      label: "Phone Number",
      type: "tel",
      nameAttr: "phone",
      placeholderAttr: "Enter Your Mobile Number",
    },
  ];

export const navListData = [
    {
      id: 1,
      linkTo: "hero",
      offset: 0,
      label: "Home",
      smooth: true,
      duration: 500,
    },
    {
      id: 2,
      linkTo: "programs",
      offset: -260,
      label: "Programs",
      smooth: true,
      duration: 500,
    },
    {
      id: 3,
      linkTo: "about",
      offset: -130,
      label: "About us",
      smooth: true,
      duration: 500,
    },
    {
      id: 4,
      linkTo: "campus",
      offset: -250,
      label: "Campus",
      smooth: true,
      duration: 500,
    },
    {
      id: 5,
      linkTo: "testimonials",
      offset: -250,
      label: "Testimonials",
      smooth: true,
      duration: 500,
    },
  ];

export const programsData = [
    {
      id: 1,
      imageSrc: program_1,
      description: "Graduation Degree",
      imageIcon: program_icon_1,
    },
    {
      id: 2,
      imageSrc: program_2,
      description: "Masters Degree",
      imageIcon: program_icon_2,
    },
    {
      id: 3,
      imageSrc: program_3,
      description: "Post Graduation",
      imageIcon: program_icon_3,
    },
  ];

export const testimonialsData = [
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