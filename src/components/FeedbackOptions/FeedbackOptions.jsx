import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onAddFeedback }) => (
  <div>
    {options.map(el => (
      <button type="button" onClick={onAddFeedback} className={css.button}>
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
