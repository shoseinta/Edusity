import Programs from "../Components/Programs/Containers/Programs";
import About from "../Components/About/Containers/About";
import Campus from "../Components/Campus/Containers/Campus";
import Testimonials from "../Components/Testimonials/Containers/Testimonials";
import Contact from "../Components/Contact/Containers/Contact";

export const sectionsData = [
  {
    id: 1,
    title: "What We Offer",
    subTitle: "OUR PROGRAM",
    children: (
      <>
        <Programs /> <About />
      </>
    ),
  },
  {
    id: 2,
    title: "Campus Photos",
    subTitle: "GALLERY",
    children: <Campus />,
  },
  {
    id: 3,
    title: "What Students Say",
    subTitle: "TESTIMONIALS",
    children: <Testimonials />,
  },
  {
    id: 4,
    title: "Get in Touch",
    subTitle: "CONTACT US",
    children: <Contact />,
  },
];
