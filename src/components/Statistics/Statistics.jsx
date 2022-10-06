import React from 'react';
import PropTypes from 'prop-types';
import StatCard from 'components/StatCard/StatCard';

const Statistics = ({ total, positivePercentage, good, neutral, bad }) => (
  <div>
    <h2>Statistics</h2>
    <div>
      <StatCard
        total={total}
        positivePercentage={positivePercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  </div>
);

export default Statistics;
