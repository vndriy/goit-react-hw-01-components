import styled from "styled-components";

export const ProfileCard = styled.div`
margin: 20px;
width: 300px;
border: 1.5px solid #FFEBCD;
border-radius: 5px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1);
`;


export const Description = styled.div`
display: grid;
  place-items: center;
  padding: 15px 0 15px 0;
`;

export const UserAvatar = styled.img`
width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border: 1px solid #DEB887;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;`;

export const Name = styled.p`
font-weight: bold;
font-size: 21px;
`;

export const Tag = styled.p`
color: grey;
`;

export const Location = styled.p`
color: grey;
`;