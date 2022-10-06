import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ total, positivePercentage, good, neutral, bad }) => {
  return (
    <div>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive feedback:{positivePercentage}</span>
    </div>
  );
};

StatCard.propTypes = {};

export default StatCard;
