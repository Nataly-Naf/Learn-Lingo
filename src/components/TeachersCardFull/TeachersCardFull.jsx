import fetchData from 'fetchData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
  CardWrapper,
  StyledButton,
  ExperienceText,
} from './TeachersCardFull.styled';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LevelButtons } from 'components/TeacherCardElements/LevelButtons';
import { TeacherInfo } from 'components/TeacherCardElements/TeacherInfo';
import { TeacherAvatar } from 'components/TeacherCardElements/TeacherAvatar';
import { TeacherMainInfo } from 'components/TeacherCardElements/TeacherMainInfo';
import { ReviewComponent } from 'components/TeacherCardElements/ReviewComponent';

export const TeachersCardFull = () => {
  const { teacherId } = useParams(); // Получаем teacherId из параметров маршрута
  console.log(teacherId);

  const [teacher, setTeacher] = useState([]); // Состояние для хранения данных учителя
  const [isFavorite, setIsFavorite] = useState(false); // Состояние для избранного
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(); // Вызов функции для получения данных
        console.log('Fetched data:', result.data);

        // Проверяем, что данные действительно пришли и являются массивом
        if (result && Array.isArray(result.data)) {
          const foundTeacher = result.data.find(
            t => t.id.toString() === teacherId.toString()
          );
          setTeacher(foundTeacher); // Устанавливаем найденного учителя в состояние
        } else {
          console.error('Data is not an array or is missing');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [teacherId]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Получаем список избранного из localStorage
    setIsFavorite(favorites.includes(teacherId)); // Устанавливаем состояние избранного
  }, [teacherId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Получаем список избранного
    if (favorites.includes(teacherId)) {
      const updatedFavorites = favorites.filter(favId => favId !== teacherId); // Удаляем учителя из избранного
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Обновляем localStorage
      setIsFavorite(false); // Обновляем состояние избранного
    } else {
      favorites.push(teacherId); // Добавляем учителя в избранное
      localStorage.setItem('favorites', JSON.stringify(favorites)); // Обновляем localStorage
      setIsFavorite(true); // Обновляем состояние избранного
    }
  };

  if (!teacher) return <p>Teacher not found</p>; // Если учитель не найден, выводим сообщение

  return (
    <CardWrapper>
      <StyledButton onClick={toggleFavorite}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </StyledButton>
      <p>Languages</p>
      {teacher && (
        <>
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
        </>
      )}
    </CardWrapper>
  );
};
