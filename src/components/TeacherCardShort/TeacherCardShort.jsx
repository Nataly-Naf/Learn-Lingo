import {
  CardWrapper,
  StyledButton,
  ReadMoreButton,
  StyledLink,
  StyledIcon,
} from './TeacherCardShort.styled';
import { FaRegHeart } from 'react-icons/fa';
import { useAuth } from 'context/authContext';
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
  const { favorites, toggleFavorite } = useAuth();
  const isFavorite = favorites.includes(id.toString());

  const handleFavoriteToggle = () => {
    toggleFavorite(id.toString());
  };

  return (
    <CardWrapper>
      <StyledButton onClick={handleFavoriteToggle}>
        {isFavorite ? <StyledIcon /> : <FaRegHeart />}
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
        <StyledLink to={`/Learn-Lingo/teachers/${id}`}>Read more</StyledLink>
      </ReadMoreButton>
      <TeacherAvatar name={name} avatar_url={avatar_url} />
      <LevelButtons levels={levels} />
    </CardWrapper>
  );
};
