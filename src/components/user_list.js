import React from 'react';
import UserListItem from './user_list_item';

const UserList = (props) => {

  const userItems = props.users.items.map((user) => {
    return (
      <UserListItem
        key={user.login}
        user={user}
        onUserSelect={props.onUserSelect}/>
    );
  });

  return (
    <ul>
      {userItems}
    </ul>
  );
};

export default UserList;
