import { TeacherFilter } from 'components/Fiters/Filters';
import { TeacherCardShort } from 'components/TeacherCardShort/TeacherCardShort';
import fetchData from 'fetchData';
import { useEffect, useState } from 'react';
import { Wrapper } from './TeachersList.styled';
import { Button } from 'components/Button/Button';
export const TeachersList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    price: '',
  });
  const [nextPageStartId, setNextPageStartId] = useState(null); // Для хранения ID следующей страницы
  const [loading, setLoading] = useState(false); // Для состояния загрузки

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData();
      console.log('Fetched data:', result);

      if (result && Array.isArray(result.data)) {
        setData(result.data);
        setFilteredData(result.data);
        setNextPageStartId(result.lastKey);
      } else {
        console.error('Data is not an array or is missing');
      }
      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    if (Array.isArray(data)) {
      setFilteredData(
        data.filter(teacher => {
          return (
            (!filters.language ||
              teacher.languages.includes(filters.language)) &&
            (!filters.level || teacher.levels.includes(filters.level)) &&
            (!filters.price ||
              teacher.price_per_hour <= parseInt(filters.price))
          );
        })
      );
    }
  }, [filters, data]);

  const loadMore = async () => {
    console.log(nextPageStartId);
    if (nextPageStartId) {
      setLoading(true);
      const result = await fetchData(nextPageStartId + 1);
      setData(prevData => [...prevData, ...result.data]);
      setFilteredData(prevData => [
        ...prevData,
        ...result.data.filter(teacher => {
          return (
            (!filters.language ||
              teacher.languages.includes(filters.language)) &&
            (!filters.level || teacher.levels.includes(filters.level)) &&
            (!filters.price ||
              teacher.price_per_hour <= parseInt(filters.price))
          );
        }),
      ]);
      setNextPageStartId(result.lastKey);
      setLoading(false);
    }
  };

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
  };

  return (
    <Wrapper>
      <TeacherFilter filters={filters} onFilterChange={handleFilterChange} />
      {filteredData &&
        filteredData.map(teacher => (
          <div key={teacher.id}>
            <TeacherCardShort teacher={teacher} />
          </div>
        ))}
      {nextPageStartId && (
        <Button text="Load more" onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </Wrapper>
  );
};
