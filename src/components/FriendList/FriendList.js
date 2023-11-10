import { Avatar, FriendWrapper, LiWrapper, Name, Status } from "./FriendList.styled"

export const FriendList = ( { data }) => {
    return (
<FriendWrapper>
            {data.map(friend => (
                <LiWrapper key={friend.id}>
                    <Status $variant={friend.isOnline} />
                    <Avatar src={friend.avatar} width={48} />
                    <Name>{friend.name}</Name>
      </LiWrapper>
  ))}
</FriendWrapper>
    )
}