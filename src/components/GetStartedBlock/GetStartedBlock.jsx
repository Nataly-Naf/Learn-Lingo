import { Button } from 'components/Button/Button';
import {
  BlockWrapper,
  StyledTitle,
  SelectedText,
  StyledText,
} from './GetStartedBlock.styled';
import { NavLink } from 'react-router-dom';

export const GetStartedBlock = () => {
  return (
    <BlockWrapper>
      <StyledTitle>
        Unlock your potential with the best{' '}
        <SelectedText>language</SelectedText> tutors
      </StyledTitle>
      <StyledText>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </StyledText>

      <NavLink to="/Learn-Lingo/teachers">
        <Button text="Get started" />
      </NavLink>
    </BlockWrapper>
  );
};
