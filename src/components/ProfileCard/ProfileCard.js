import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import {
  ProfileCard,
  Description,
  UserAvatar,
  Name,
  Tag,
  Location,
} from './ProfileCard.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <UserAvatar src={avatar} width={150} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <ProfileStats stats={stats} />
    </ProfileCard>
  );
};
