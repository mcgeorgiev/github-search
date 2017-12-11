import React from 'react';

const UserListItem = (props) => {
  const imageURL = props.user.avatar_url;
  const login = props.user.login;
  const onUserSelect = props.onUserSelect;

  return (
    <li onClick={() => onUserSelect(props.user)}>
      <div>
        <img src={imageURL} />
        {login}
      </div>
    </li>
  );
};

export default UserListItem;
