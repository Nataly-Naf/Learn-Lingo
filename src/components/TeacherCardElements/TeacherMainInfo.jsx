import {
  TeachersNameWrapper,
  TeachersName,
  MainInfoWrapper,
  InfoDescription,
  InfoName,
} from './TeacherMainInfo.styled';
import { nanoid } from 'nanoid';

export const TeacherMainInfo = ({
  name,
  surname,
  languages,
  lesson_info,
  conditions,
}) => {
  return (
    <div>
      <TeachersNameWrapper>
        {' '}
        <TeachersName>{name}</TeachersName>
        <TeachersName>{surname}</TeachersName>
      </TeachersNameWrapper>
      <MainInfoWrapper>
        <InfoName>Speaks: </InfoName>
        <InfoDescription>
          {languages &&
            languages.map(language => {
              return <span key={nanoid()}> {language}, </span>;
            })}
        </InfoDescription>
      </MainInfoWrapper>
      <MainInfoWrapper>
        <InfoName>Lesson Info: </InfoName>
        <InfoDescription>{lesson_info}</InfoDescription>
      </MainInfoWrapper>
      <MainInfoWrapper>
        <InfoName>Conditions: </InfoName>
        <InfoDescription>{conditions}</InfoDescription>
      </MainInfoWrapper>
    </div>
  );
};
