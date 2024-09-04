import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 90%;
  height: 339px;
  position: relative;
  background-color: var(--light-color);
  border-radius: 30px;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 1220px) {
    width: 568px;
    height: 530px;
  }
`;

export const ImageGirl = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  // margin: 10px 0;

  object-fit: cover;
  @media (min-width: 1220px) {
    width: 339px;
    height: auto;
    top: 50%;
    left: 50%;
  }
`;

export const ImageLaptop = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  position: absolute;
  z-index: 1000;
  bottom: -44%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1220px) {
    width: 339px;
    height: auto;
    bottom: -47%;
    left: 50%;
  }
`;
