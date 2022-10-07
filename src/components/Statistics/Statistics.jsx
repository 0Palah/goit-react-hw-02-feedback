import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ total, positivePercentage, good, neutral, bad }) => (
  <div>
    <h2>Statistics</h2>
    <div>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}%</span>
    </div>
  </div>
);
Statistics.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default Statistics;
