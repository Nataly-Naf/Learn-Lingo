import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 90%;
  height: 530px;
  position: relative;
  background-color: #fbe9ba;
  border-radius: 30px;
  overflow: hidden;

  @media (min-width: 1220px) {
    width: 568px;
    height: 530px;
  }
`;

export const ImageGirl = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // margin: 10px 0;
  width: 339px;
  height: auto;
  object-fit: cover;
`;

export const ImageLaptop = styled.img`
  width: 391px;
  height: auto;
  object-fit: cover;
  position: absolute;
  z-index: 1000;
  bottom: -58%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
