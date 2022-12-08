import PropTypes from 'prop-types';

import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleGrade }) => {
  return (
    <>
      <ButtonBox>
        {Object.keys(options).map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => handleGrade(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonBox>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleGrade: PropTypes.func.isRequired,
};
