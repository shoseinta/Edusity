import Navbar from "./Components/Navbar/Containers/Navbar";
import Hero from "./Components/Hero/Containers/Hero";
import Footer from "./Components/Footer/Containers/Footer";
import VideoPlayer from "./Components/VideoPlayer/Containers/VideoPlayer";
import Section from "./Shared/Containers/Section";
import { sectionsData } from "./Constants/sectionsData";
import { AppProvider } from "./Contexts/AppContext";

const App = () => {
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
