import styled from "styled-components";

export const StatisticWrapper = styled.section`
margin: 20px;
width: 400px;
border: 1px solid #A0522D;
border-radius: 10px;
display: grid;
place-items: center;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1);



`;

export const Header = styled.h2`
text-transform: uppercase;
background-color: ##FFFFF0;
`;

export const StatUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid #A0522D;

  & > li:not(:last-child) {
    border-right: 1px solid #A0522D;
  }
`;

export const StatLI = styled.li`
  display: flex;
  padding: 10px;
flex-direction: column;
  width: 79px;
  text-align: center;
  background-color: ${(props) => {
    switch (props.$variant) {
        case ".docx":
            return "#FFF0F5";
        case ".pdf":
            return "#FFFACD"
        case ".mp3":
            return "#ADD8E6";
        case ".psd":
            return "#F08080"
        default:
            return "white";
    }
}};
  
&:first-child {
    border-bottom-left-radius: 10px;
}

&:last-child {
    border-bottom-right-radius: 10px;
}
`;
