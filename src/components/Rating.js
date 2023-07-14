import ReactStars from "react-rating-stars-component";
import React from 'react';
import '../App.css';

function RatingStars  ({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= rating ? 'star filled' : 'star';
    stars.push(<span className={starClassName} key={i} />);
  }

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
