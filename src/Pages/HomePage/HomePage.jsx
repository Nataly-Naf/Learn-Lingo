import { StyledMain, MainBlocksWrapper } from './HomePage.styled.js';
import { GetStartedBlock } from 'components/GetStartedBlock/GetStartedBlock.jsx';
import { MainPictureBlock } from 'components/MainPictureBlock/MainPictureBlock.js';
import { Footer } from 'components/Footer/Footer.jsx';
import fetchData from 'fetchData.js';
import { useEffect, useState } from 'react';
import { useAuth } from 'context/authContext.js';
export const HomePage = () => {
  const authContext = useAuth();
  console.log(authContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
      console.log(data);
    };

    getData();
  }, [data]);
  return (
    <>
      <StyledMain>
        <MainBlocksWrapper>
          <GetStartedBlock />
          <MainPictureBlock />
        </MainBlocksWrapper>
      </StyledMain>
      <Footer />
    </>
  );
};
