import PropTypes from 'prop-types';

import { SectionBox, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      {children}
    </SectionBox>
  );
};

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
