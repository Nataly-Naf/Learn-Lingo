import {
  CardWrapper,
  StyledButton,
  ReadMoreButton,
  StyledLink,
} from './TeacherCardShort.styled';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { LevelButtons } from 'components/TeacherCardElements/LevelButtons';
import { TeacherInfo } from 'components/TeacherCardElements/TeacherInfo';
import { TeacherAvatar } from 'components/TeacherCardElements/TeacherAvatar';
import { TeacherMainInfo } from 'components/TeacherCardElements/TeacherMainInfo';

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
    rating,
    price_per_hour,
    lessons_done,
  },
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    console.log(id);

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(id)) {
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
      <TeacherInfo
        rating={rating}
        price_per_hour={price_per_hour}
        lessons_done={lessons_done}
      />
      <TeacherMainInfo
        name={name}
        surname={surname}
        languages={languages}
        lesson_info={lesson_info}
        conditions={conditions}
      />
      <ReadMoreButton>
        {' '}
        <StyledLink to={`/Learn-Lingo/teachers/${id}`}>Read more</StyledLink>
      </ReadMoreButton>
      <TeacherAvatar name={name} avatar_url={avatar_url} />
      <LevelButtons levels={levels} />
    </CardWrapper>
  );
};
