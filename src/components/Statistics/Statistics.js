import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivPercentage}) => {
  return (
    <div>
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivPercentage}%</li>
        </ul>
      )}
    </div>

  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
