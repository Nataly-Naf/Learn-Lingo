import { MainBlocksWrapper } from './HomePage.styled.js';
import { GetStartedBlock } from 'components/GetStartedBlock/GetStartedBlock.jsx';
import { MainPictureBlock } from 'components/MainPictureBlock/MainPictureBlock.js';
import { Footer } from 'components/Footer/Footer.jsx';
import fetchData from 'fetchData.js';
import { useEffect, useState } from 'react';
import { Header } from 'components/Header/Header.jsx';
// import styles from './HomePage.module.css';

export const HomePage = () => {
  const [data, setData] = useState(null);
  // const [activeTab, setActiveTab] = useState('Tab 1');

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, [data]);
  return (
    <>
      {/* <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === 'Tab 1' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('Tab 1')}
        >
          Tenerife
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === 'Tab 2' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('Tab 2')}
        >
          Ibiza
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === 'Tab 3' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('Tab 3')}
        >
          Martinique{' '}
        </button>
      </div> */}
      {/* <StyledMain> */}
      <Header />
      <MainBlocksWrapper>
        <GetStartedBlock />
        <MainPictureBlock />
      </MainBlocksWrapper>
      {/* </StyledMain> */}
      <Footer />
    </>
  );
};
