import {
  LevelButton,
  LevelButtonWrapper,
} from 'components/TeacherCardShort/TeacherCardShort.styled';
import { nanoid } from 'nanoid';
// export const LevelButtonWrapper = ({ levels }) => {
//     return  ( {levels.map(level => {
//           return <LevelButton key={nanoid()}>{level}</LevelButton>;
//         })}
//       </LevelButtonWrapper >)}

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
