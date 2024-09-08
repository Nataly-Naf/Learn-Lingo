import {
  LevelButton,
  LevelButtonWrapper,
} from 'components/TeacherCardElements/LevelButtons.styled';
import { nanoid } from 'nanoid';

export const LevelButtons = ({ levels }) => {
  return (
    <LevelButtonWrapper>
      {' '}
      {/* Используйте обертку, такую как <div> или другой элемент */}
      {levels.map(level => (
        <LevelButton key={nanoid()}>{level}</LevelButton>
      ))}
    </LevelButtonWrapper>
  );
};
