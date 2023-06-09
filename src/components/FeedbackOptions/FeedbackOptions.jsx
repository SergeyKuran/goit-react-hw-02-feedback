import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container__button}>
      {options.map(el => (
        <button
          key={el}
          className={css.button}
          type="button"
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
