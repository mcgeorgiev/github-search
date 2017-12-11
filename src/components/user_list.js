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
    <div>
      <ul>
        {userItems}
      </ul>
    </div>
  );
};

export default UserList;
