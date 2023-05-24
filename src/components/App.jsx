import React, { Component } from 'react';
import css from './app.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    };
  }

  onLeaveFeedback = (event) => {
    const { textContent } = event.target;
    this.setState((prevState) => ({
      [textContent.toLowerCase()]: prevState[textContent.toLowerCase()] + 1,
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const value = Math.round((good / total) * 100);
    return good === 0 ? 0 : value;
  };

  render() {
    const { good, neutral, bad, total } = this.state;

    return (
      <div className={css.container}>
        <Section title="Please leave feedback!">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback :(" />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
