import { GlobalStyled } from './GlobalStyle.js';

import { Profile } from './ProfileCard/ProfileCard.js'
import userData from '../components/user.json'

import { Statistic } from './Statistics/Statistics.js';

import { FriendList } from './FriendList/FriendList.js';
import friends from "../components/friends.json"

import { TransactionHistory } from './TransactionHistory/Transactions.js';
import transactions from "../components/transactions.json"

export const App = () => {
  return (
    <>
      <GlobalStyled />
      <Profile user={userData} />
      <Statistic />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
