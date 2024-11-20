import "./Campus.css";
import white_arrow from "../../../assets/white-arrow.png";
import Gallery from "../Components/Gallery";

const Campus = () => {
  return (
    <div className="campus">
      <Gallery />
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
