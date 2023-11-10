import styled from "styled-components";

export const StatsCard = styled.ul`
margin: 0;
padding: 0;
display: flex;
border: 5px solid #FFEBCD;
`;

export const ListItem = styled.li`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  width: 34%;
  background-color: #FAEBD7;
`;

export const SpanLabel = styled.span`
font-weight: bold;
`;

export const SpanQuantity = styled.span`
color: grey;

`;