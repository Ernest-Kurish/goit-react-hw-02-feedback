import { useState } from 'react';
import css from './app.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setNegative] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = event => {
    if (event.target.textContent === 'Good') {
      setPositive(good + 1);
    }
    if (event.target.textContent === 'Bad') {
      setNegative(bad + 1);
    }
    if (event.target.textContent === 'Neutral') {
      setNeutral(neutral + 1);
    }
    setTotal(total + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    const value = Math.round((good / total) * 100);
    if (good === 0) {
      return 0;
    } else {
      return value;
    }
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback!">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
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
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
