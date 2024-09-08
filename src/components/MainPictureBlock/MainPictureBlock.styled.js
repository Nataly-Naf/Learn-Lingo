import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 90%;
  height: 339px;
  position: relative;
  background-color: var(--light-color);
  border-radius: 30px;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 568px;
    height: auto;
  }
`;

export const ImageGirl = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 339px;
    height: auto;
    top: 40%;
    left: 50%;
  }
  @media (min-width: 1220px) {
    width: 339px;
    height: auto;
    top: 40%;
    left: 50%;
  }
`;

// export const ImageLaptop = styled.img`
//   width: 90%;
//   height: auto;
//   object-fit: cover;
//   position: absolute;
//   z-index: 1000;
//   bottom: -44%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   @media (min-width: 1220px) {
//     width: 339px;
//     height: auto;
//     bottom: -47%;
//     left: 50%;
//   }
// `;
export const Laptop = styled.div`
  width: 90%;
  height: 200px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 5px;
  position: absolute;
  z-index: 667;
  bottom: -47%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    width: 90%;
    height: 200px;
    bottom: -38%;
    left: 50%;
  }
  @media (min-width: 1220px) {
    width: 90%;
    height: 200px;
    bottom: -33%;
    left: 50%;
  }
`;
