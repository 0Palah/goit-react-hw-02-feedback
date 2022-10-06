import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounter = event => {
    const targetEl = event.target.textContent.toLowerCase();
    console.log(this.state);
    console.log(Object.values(this.state));
    // console.log(targetEl);
    this.setState(prevState => ({
      [targetEl]: (prevState[targetEl] += 1),
    }));
    // console.dir(event.target.textContent);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  getName = event => {
    Object.keys(this.state);
    console.log(Object.keys(this.state));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions handleCounter={this.handleCounter} />
        <Statistics
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
