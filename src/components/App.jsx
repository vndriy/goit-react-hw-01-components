import { GlobalStyled } from './GlobalStyle.js';

import { Profile } from './ProfileCard/ProfileCard.js';
import user from '../data/user.json';

import { Statistic } from './Statistics/Statistics.js';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList.js';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/Transactions.js';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyled />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
