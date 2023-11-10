import { ListItem, SpanLabel, SpanQuantity, StatsCard } from "./ProfileStats.styled"

export const ProfileStats = ({ stats: { followers, views, likes } }) => {

  return (
    <StatsCard>
      <ListItem>
        <SpanLabel>Followers</SpanLabel>
        <SpanQuantity>{followers}</SpanQuantity>
      </ListItem>
      <ListItem>
        <SpanLabel>Views</SpanLabel>
        <SpanQuantity>{views}</SpanQuantity>
      </ListItem>
      <ListItem>
        <SpanLabel>Likes</SpanLabel>
        <SpanQuantity>{likes}</SpanQuantity>
      </ListItem>
    </StatsCard>
  );
}


