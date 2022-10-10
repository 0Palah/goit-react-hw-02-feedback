import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onHandleCounter }) => (
  <div>
    {options.map(el => (
      <button type="button" onClick={onHandleCounter} className={css.button}>
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onHandleCounter: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
