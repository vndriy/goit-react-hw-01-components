import styled from "styled-components";

export const TableWrapper = styled.table`
 width: 400px;
  border-collapse: collapse;
  margin: 20px;
`;

export const Th = styled.th`
background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;

  &:hover {
  background-color: #e0e0e0;
}
`;

export const Tr = styled.tr`
border: 1px solid #ddd;

&:nth-child(even) {
  background-color: #f2f2f2;
}

&:nth-child(odd) {
  background-color: #ffffff;
}
`;

export const Td = styled.td`
border: 1px solid #ddd;
  padding: 8px;

  &:hover {
  background-color: #87CEFA;
}
`;