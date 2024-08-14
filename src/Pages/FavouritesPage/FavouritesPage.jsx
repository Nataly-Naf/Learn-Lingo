import { TeacherCardShort } from 'components/TeacherCardShort/TeacherCardShort';
import fetchData from 'fetchData'; // Ensure fetchData is correctly set up to return parsed JSON
import React, { useEffect, useState } from 'react';

export const Favorites = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const data = await fetchData(); // Assuming fetchData returns already parsed JSON
        setAllTeachers(data);
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    };

    fetchAllTeachers();
  }, []);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];

    if (allTeachers.length > 0) {
      const filteredTeachers = allTeachers.filter(teacher =>
        favoriteIds.includes(teacher.id)
      );
      setFavoriteTeachers(filteredTeachers);
    }
  }, [allTeachers]);

  return (
    <div>
      <h1>Your Favorite Teachers</h1>
      <div>
        {favoriteTeachers.length > 0 ? (
          favoriteTeachers.map(teacher => (
            <TeacherCardShort key={teacher.id} teacher={teacher} />
          ))
        ) : (
          <p>You have no favorite teachers yet.</p>
        )}
      </div>
    </div>
  );
};
