import React from 'react';
import { BlockWrapper, ImageGirl, Laptop } from './MainPictureBlock.styled';
import CurlyGirl from '../../pictures/68e4226188648a055ee1b42bed644f46-sticker 1.png';
import { Icon } from 'components/Icon';
import { useTheme } from 'styled-components';
export const MainPictureBlock = () => {
  const theme = useTheme();
  return (
    <BlockWrapper>
      <ImageGirl src={CurlyGirl} alt="Curly girl" />
      <Laptop>
        {theme.colors.dark === '#F4C550' && (
          <Icon
            styles={{
              width: '47px',
              height: '57px',
            }}
            id="logo-mac-yellow"
          />
        )}{' '}
        {theme.colors.dark === '#9FBAAE' && (
          <Icon
            styles={{
              width: '47px',
              height: '57px',
            }}
            id="logo-mac-green"
          />
        )}{' '}
        {theme.colors.dark === '#9FB7CE' && (
          <Icon
            styles={{
              width: '47px',
              height: '57px',
            }}
            id="logo-mac-blue"
          />
        )}{' '}
      </Laptop>
    </BlockWrapper>
  );
};
