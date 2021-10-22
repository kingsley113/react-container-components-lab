// Code MovieReviews Here
import React from "react";
// import Review from "./Review";

const MovieReviews = ({ reviews }) => {
  if (reviews) {
    return (
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li className="review" key={index}>
            <h2>{review.display_title}</h2>
            <p>{review.mpaa_rating}</p>
            <p>{review.summary_short}</p>
          </li>
        ))}
      </ul>
    );
  }
  return <div></div>;
};

export default MovieReviews;
