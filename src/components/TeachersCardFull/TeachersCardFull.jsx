import fetchData from 'fetchData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  CardWrapper,
  StyledButton,
  ExperienceText,
  StyledIcon,
} from './TeachersCardFull.styled';
import { FaRegHeart } from 'react-icons/fa';
import { LevelButtons } from 'components/TeacherCardElements/LevelButtons';
import { TeacherInfo } from 'components/TeacherCardElements/TeacherInfo';
import { TeacherAvatar } from 'components/TeacherCardElements/TeacherAvatar';
import { TeacherMainInfo } from 'components/TeacherCardElements/TeacherMainInfo';
import { ReviewComponent } from 'components/TeacherCardElements/ReviewComponent';
import { useAuth } from 'context/authContext';
export const TeachersCardFull = () => {
  const { teacherId } = useParams();
  const { favorites, toggleFavorite } = useAuth();
  const [teacher, setTeacher] = useState(null); // Начальное значение должно быть null

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log('Fetched data:', result.data);

        if (result && Array.isArray(result.data)) {
          const foundTeacher = result.data.find(
            t => t.id.toString() === teacherId.toString() // Сравниваем как строки
          );
          setTeacher(foundTeacher);
        } else {
          console.error('Data is not an array or is missing');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [teacherId]);

  // Проверяем, является ли текущий учитель избранным
  const isFavorite = favorites.includes(teacherId.toString());
  const handleFavoriteToggle = () => {
    toggleFavorite(teacherId.toString());
  };
  if (!teacher) return <p>Teacher not found</p>;

  return (
    <CardWrapper>
      <StyledButton onClick={handleFavoriteToggle}>
        {isFavorite ? <StyledIcon /> : <FaRegHeart />}
      </StyledButton>
      <p>Languages</p>
      <TeacherInfo
        rating={teacher.rating || 'N/A'}
        price_per_hour={teacher.price_per_hour || 'N/A'}
        lessons_done={teacher.lessons_done || 'N/A'}
      />
      <TeacherMainInfo
        name={teacher.name || 'Unknown'}
        surname={teacher.surname || 'Unknown'}
        languages={teacher.languages || []}
        lesson_info={teacher.lesson_info || 'N/A'}
        conditions={teacher.conditions || 'N/A'}
      />
      <ExperienceText>{teacher.experience || 'N/A'}</ExperienceText>
      {teacher.reviews && teacher.reviews.length > 0 ? (
        teacher.reviews.map((review, index) => (
          <ReviewComponent key={index} review={review} />
        ))
      ) : (
        <p>No reviews available</p>
      )}
      <TeacherAvatar
        name={teacher.name || 'Unknown'}
        avatar_url={teacher.avatar_url || ''}
      />
      <LevelButtons levels={teacher.levels || []} />
    </CardWrapper>
  );
};
