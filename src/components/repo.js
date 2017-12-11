import React from 'react';

const Repo = (props) => {
  return (
    <li>
      <div>
        <h3>{props.repo.name}</h3>
        <p>{props.repo.description}</p>
        <p>{props.repo.language}</p>
        <p>{props.repo.updated_at}</p>
      </div>
    </li>
  );
};

export default Repo;
