import React from 'react';
import Icons from 'sprite.svg';
export const Icon = ({ id, styles }) => {
  return (
    <svg style={{ width: ' ', height: ' ', ...styles }}>
      <use href={Icons + '#icon-' + id}></use>
    </svg>
  );
};
