import { Header } from 'components/Header/Header';
import { TeacherCardShort } from 'components/TeacherCardShort/TeacherCardShort';
import { useAuth } from 'context/authContext';
import { fetchTeacherById } from 'fetchData';
import React, { useEffect, useState } from 'react';
import { FavouritePageWrapper } from './FavouritesPage.styled';
export const Favorites = () => {
  const { favorites } = useAuth();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFavoriteTeachers = async () => {
      setLoading(true);
      setError(null);

      if (favorites.length === 0) {
        setTeachers([]);
        setLoading(false);
        return;
      }

      const teachersData = [];
      try {
        for (const id of favorites) {
          const teacher = await fetchTeacherById(parseInt(id));

          if (teacher) {
            teachersData.push(teacher);
          } else {
          }
        }
        setTeachers(teachersData);
      } catch (err) {
        setError('Failed to load favorite teachers.');
      } finally {
        setLoading(false);
      }
    };

    loadFavoriteTeachers();
  }, [favorites]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (teachers.length === 0)
    return (
      <p>
        No favorite teachers found. Please add your first favourite teacher!
      </p>
    );

  return (
    <FavouritePageWrapper>
      <Header />
      <h1>Favorite Teachers</h1>
      <div>
        {teachers.map(teacher => (
          <TeacherCardShort key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </FavouritePageWrapper>
  );
};
