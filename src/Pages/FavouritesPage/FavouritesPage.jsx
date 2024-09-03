import { TeacherCardShort } from 'components/TeacherCardShort/TeacherCardShort';
import { useAuth } from 'context/authContext';
import { fetchTeacherById } from 'fetchData';
import React, { useEffect, useState } from 'react';

export const Favorites = () => {
  const { favorites } = useAuth();
  console.log('Favorites from context:', favorites);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFavoriteTeachers = async () => {
      setLoading(true);
      setError(null);

      if (favorites.length === 0) {
        setTeachers([]); // Установите пустой массив, если нет избранных
        setLoading(false);
        return;
      }

      const teachersData = [];
      try {
        for (const id of favorites) {
          console.log(`Fetching teacher with id: ${id}`);
          const teacher = await fetchTeacherById(parseInt(id));
          console.log(`Fetched teacher data for id ${id}:`, teacher);

          if (teacher) {
            teachersData.push(teacher);
          } else {
            console.warn(`Teacher not found for id: ${id}`);
          }
        }
        setTeachers(teachersData);
      } catch (err) {
        setError('Failed to load favorite teachers.');
        console.error('Error loading teachers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFavoriteTeachers();
  }, [favorites]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (teachers.length === 0) return <p>No favorite teachers found</p>;

  return (
    <div>
      <h1>Favorite Teachers</h1>
      <div>
        {teachers.map(teacher => (
          <TeacherCardShort key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};
