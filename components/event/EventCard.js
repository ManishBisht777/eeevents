import React from "react";

const EventCard = () => {
  return (
    <div className="event">
      <div
        className="event__image"
        // src="https://fastly.picsum.photos/id/328/536/354.jpg?hmac=zNPpTuRKgZeaqYTdj1_KOjsYQUn3PQOYDdfp5LF0HXc"
        // alt="image"
      />
      <div className="event__info">
        <h2>Crestwood Hacks</h2>
        <div className="event__timing">
          <p>Jan 30 - Mar 30</p>
          <p className="event__type">Online</p>
        </div>
        <button className="event__join">Join</button>
      </div>
      <div className="event__counter">26 Days left</div>
    </div>
  );
};

export default EventCard;
