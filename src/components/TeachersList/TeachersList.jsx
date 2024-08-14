import { TeacherCardShort } from 'components/TeacherCardShort/TeacherCardShort';
import fetchData from 'fetchData';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const TeachersList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);
  return (
    <>
      {data &&
        data.map(teacher => {
          return (
            <div key={nanoid()}>
              <TeacherCardShort teacher={teacher} />
            </div>
          );
        })}
    </>
  );
};
