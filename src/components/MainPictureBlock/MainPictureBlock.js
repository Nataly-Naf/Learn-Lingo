import { BlockWrapper, Image } from './MainPictureBlock.styled';
import MacImage from '../../pictures/Mac.jpg';
import CurlyGirl from '../../pictures/68e4226188648a055ee1b42bed644f46-sticker 1.png';

export const MainPictureBlock = () => {
  return (
    <BlockWrapper>
      <Image src={CurlyGirl} alt="curly girl 1" />
      <Image src={MacImage} alt="curly girl 1" />
    </BlockWrapper>
  );
};
