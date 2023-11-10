import styled from "styled-components";

const bgColor = p => {
    switch (p.$variant) {
        case true:
            return "green"
        case false:
            return "#CD5C5C";
        default:
            return "white";
    }
}

export const FriendWrapper = styled.ul`
margin: 20px;
border: 7px solid #87CEFA;
border-radius: 20px;
width: 400px;

`;

export const LiWrapper = styled.li`
border: 1px solid #87CEFA;
display: flex;
padding: 5px;
padding-left: 15px;
align-items: center

`;

export const Status = styled.span`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${bgColor};
`;

export const Avatar = styled.img`
margin-left: 15px;
`;

export const Name = styled.p`
font-weight: bold;
margin-left: 10px;
`;