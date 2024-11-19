const Testimonial = ({ userImage, userName, userLocation, message }) => (
  <div className="slide">
    <div className="user-info">
      <img src={userImage} alt={userName} />
      <div>
        <h3>{userName}</h3>
        <span>{userLocation}</span>
      </div>
    </div>
    <p>{message}</p>
  </div>
);

export default Testimonial;
