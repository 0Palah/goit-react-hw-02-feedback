import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounter = event => {
    const targetEl = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [targetEl]: (prevState[targetEl] += 1),
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
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
        <Section>
          <FeedbackOptions handleCounter={this.handleCounter} />
        </Section>
        <Section>
          <Statistics
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </div>
    );
  }
}