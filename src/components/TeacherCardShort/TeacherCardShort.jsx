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
  StyledButton,
} from './TeacherCardShort.styled';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const TeacherCardShort = ({
  teacher: {
    name,
    avatar_url,
    languages,
    conditions,
    lesson_info,
    surname,
    levels,
    id,
  },
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the teacher is in the favorites list when component mounts
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    console.log(id);

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(id)) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(favId => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };
  return (
    <CardWrapper>
      <StyledButton onClick={toggleFavorite}>
        {' '}
        {isFavorite ? <FaHeart /> : <FaRegHeart />}{' '}
      </StyledButton>
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
      <Link to={`/Learn-Lingo/teachers/${id}`}>More info</Link>
    </CardWrapper>
  );
};
