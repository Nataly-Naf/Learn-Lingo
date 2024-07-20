import { nanoid } from 'nanoid';
import {
  CardWrapper,
  Avatar,
  AvatarWrapper,
  TeachersInfoBlock,
  MainInfoWrapper,
  InfoName,
  InfoDescription,
  TeachersName,
  TeachersNameWrapper,
} from './TeacherCardShort.styled';

export const TeacherCardShort = ({
  teacher: {
    name,
    avatar_url,
    languages,
    conditions,
    lesson_info,
    surname,
    levels,
  },
}) => {
  return (
    <CardWrapper>
      <p>Languages</p>
      <TeachersInfoBlock>
        <p>Lessons online</p>
        <p>Lessons done</p>
        <p>Lessons done</p>
        <p>Rating</p>
        <p>Price</p>
      </TeachersInfoBlock>
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
                return <span> {language}, </span>;
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
        <p>Read more</p>
      </div>
      <AvatarWrapper>
        <Avatar alt={name} src={avatar_url} width="30px" />
      </AvatarWrapper>

      <div>
        {levels.map(level => {
          return <button key={nanoid()}>{level}</button>;
        })}
      </div>
    </CardWrapper>
  );
};
