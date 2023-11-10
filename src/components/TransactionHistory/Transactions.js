import { TableWrapper, Td, Th, Tr } from "./Transactions.styled"

export const TransactionHistory = ({ items }) => {
    return (
        <TableWrapper>
  <thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </thead>
            {items.map(item => (
                <tbody key={item.id}>
                    <Tr>
                        <Td>{item.type}</Td>
                        <Td>{item.amount}</Td>
                        <Td>{item.currency}</Td>
    </Tr>
  </tbody>
            ))}
        </TableWrapper>
    )
}





