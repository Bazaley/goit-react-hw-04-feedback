import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleGrade }) => {
  return (
    <>
      <ButtonBox>
        {options.map(option => (
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
