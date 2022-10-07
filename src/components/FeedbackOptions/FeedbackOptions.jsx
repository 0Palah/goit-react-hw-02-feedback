import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleCounter }) => (
  <div>
    {options.map(el => (
      <button type="button" onClick={handleCounter} className={css.button}>
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  handleCounter: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
