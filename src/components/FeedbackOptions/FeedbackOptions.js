import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div className={styles.feedback}>
        <button
          type="button"
          onClick={onLeaveFeedback}
          className={styles['feedback__btn']}
        >
          Good
        </button>
        <button
          type="button"
          onClick={onLeaveFeedback}
          className={styles['feedback__btn']}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={onLeaveFeedback}
          className={styles['feedback__btn']}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
