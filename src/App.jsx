import Navbar from "./Components/Navbar/Containers/Navbar";
import Hero from "./Components/Hero/Containers/Hero";
import Programs from "./Components/Programs/Containers/Programs";
import About from "./Components/About/Containers/About";
import Campus from "./Components/Campus/Containers/Campus";
import Testimonials from "./Components/Testimonials/Containers/Testimonials";
import Contact from "./Components/Contact/Containers/Contact";
import Footer from "./Components/Footer/Containers/Footer";
import VideoPlayer from "./Components/VideoPlayer/Containers/VideoPlayer";
import Section from "./Shared/Containers/Section";
import { AppProvider } from "./Contexts/AppContext";

const App = () => {
  const sectionsData = [
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

  return (
    <AppProvider>
      <Navbar />
      <Hero />
      <div className="container">
        {sectionsData.map((sectionData) => (
          <Section key={sectionData.id} {...sectionData} />
        ))}
        <Footer />
      </div>
      <VideoPlayer />
    </AppProvider>
  );
};

export default App;
