import "./ContactInfo.css";
import msg_icon from "../../../assets/msg-icon.png";
import mail_icon from "../../../assets/mail-icon.png";
import phone_icon from "../../../assets/phone-icon.png";
import location_icon from "../../../assets/location-icon.png";

const ContactInfo = () => (
  <div className="contact-col">
    <h3>
      Send us a message <img src={msg_icon} alt="Message Icon" />
    </h3>
    <p>
      Feel free to reach out through contact form or find our contact
      information below. Your feedback, questions, and suggestions are important
      to us as we strive to provide exceptional service to our university
      community.
    </p>
    <ul>
      <li>
        <img src={mail_icon} alt="Mail Icon" /> Contact@GreatStack.dev
      </li>
      <li>
        <img src={phone_icon} alt="Phone Icon" /> +1 123-456-7890
      </li>
      <li>
        <img src={location_icon} alt="Location Icon" />
        77 Massachusetts Ave, Cambridge <br />
        MA 02139, United States
      </li>
    </ul>
  </div>
);

export default ContactInfo;
