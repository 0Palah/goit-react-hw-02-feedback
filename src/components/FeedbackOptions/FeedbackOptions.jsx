import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleCounter }) => (
  <div>
    <h2>Please leave feedback</h2>
    <div>
      <button type="button" onClick={handleCounter}>
        Good
      </button>
      <button type="button" onClick={handleCounter}>
        Neutral
      </button>
      <button type="button" onClick={handleCounter}>
        Bad
      </button>
    </div>
  </div>
);

export default FeedbackOptions;
