import { Header } from 'components/Header/Header';
import { StyledMain, MainBlocksWrapper } from './HomePage.styled.js';
import { GetStartedBlock } from 'components/GetStartedBlock/GetStartedBlock.jsx';
import { MainPictureBlock } from 'components/MainPictureBlock/MainPictureBlock.js';
import { Footer } from 'components/Footer/Footer.jsx';
import fetchData from 'fetchData.js';
import { useEffect, useState } from 'react';
import { TeachersList } from 'components/TeachersList/TeachersList.jsx';

export const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
      console.log(result);
    };

    getData();
  }, []);
  return (
    <>
      <TeachersList />
      <StyledMain>
        <Header />
        <MainBlocksWrapper>
          <GetStartedBlock />
          <MainPictureBlock />
        </MainBlocksWrapper>
      </StyledMain>
      <Footer />
    </>
  );
};
