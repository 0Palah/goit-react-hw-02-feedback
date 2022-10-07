import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleCounter }) => (
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
);

FeedbackOptions.propTypes = {
  handleCounter: PropTypes.func,
};

export default FeedbackOptions;
