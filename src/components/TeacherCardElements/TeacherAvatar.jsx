import { AvatarWrapper, AvatarPicture } from './TeacherAvatar.styled';

export const TeacherAvatar = ({ name, avatar_url }) => {
  return (
    <AvatarWrapper>
      <AvatarPicture alt={name} src={avatar_url} width="30px" />
    </AvatarWrapper>
  );
};
