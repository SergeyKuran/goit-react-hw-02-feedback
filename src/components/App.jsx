import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  addFeedback(option) {
    this.setState(prevState => {
      option.target.textContent = prevState;

      return {
        [option]: prevState[option] + 1,
      };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const percent = Math.round((good / this.countTotalFeedback()) * 100);

    return percent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const option = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export { App };
