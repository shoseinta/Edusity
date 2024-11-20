import { useState } from "react";
import ContactInput from "./ContactInput";
import { inputsData } from "../../../Constants/Constants";
import "./ContactForm.css";
import white_arrow from "../../../assets/white-arrow.png";

const ACCESS_KEY = "1215bfd9-a6d0-4e13-9c51-2740dc645df9";
const URL = "https://api.web3forms.com/submit";
const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", ACCESS_KEY);

    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-col">
      <form onSubmit={onSubmit}>
        {inputsData.map((inputData) => (
          <ContactInput key={inputData.id} {...inputData} />
        ))}
        <label>Write Your Message Here</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Enter Your Message"
          required
        ></textarea>
        <button type="submit" className="btn dark-btn">
          Submit Now <img src={white_arrow} alt="Arrow Icon" />
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
