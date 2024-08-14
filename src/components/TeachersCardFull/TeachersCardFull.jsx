import fetchData from 'fetchData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Avatar, AvatarWrapper } from './TeachersCardFull.styled';

export const TeachersCardFull = () => {
  const { teacherId } = useParams();
  console.log(teacherId);
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const getTeacher = async () => {
      const result = await fetchData();

      const foundTeacher = result.find(t => t.id === teacherId);
      setTeacher(foundTeacher);
    };

    getTeacher();
  }, [teacherId]);

  if (!teacher) return <p>Teacher not found</p>;

  return (
    <div>
      <h1>{teacher.name}</h1>
      <AvatarWrapper>
        <Avatar alt={teacher.name} src={teacher.avatar_url} width="30px" />
      </AvatarWrapper>
    </div>
  );
};
