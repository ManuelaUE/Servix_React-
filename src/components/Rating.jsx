import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const Rating = ({ maxRating, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    if (rating === 0) {
      setRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{ cursor: 'pointer' }}
        >
          {index < rating ? (
            <FaStar color="#ffc107" />
          ) : (
            <FaStar color="#e4e5e9" />
          )}
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  initialRating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func,
};

Rating.defaultProps = {
  maxRating: 5,
  initialRating: 0,
};

export default Rating;
