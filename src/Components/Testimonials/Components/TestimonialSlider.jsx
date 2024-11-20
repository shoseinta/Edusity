import { useState } from "react";
import TestiomonialImages from "./TestimonialImages";
import Slider from "./Slider";


const TestimonialSlider = () => {
  const [tx, setTx] = useState(0);
  return (
    <div className="testimonials">
      <TestiomonialImages setTx={setTx} />
      <Slider tx={tx} />
    </div>
  );
};

export default TestimonialSlider;
