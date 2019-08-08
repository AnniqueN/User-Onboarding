import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>E-mail: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserCard;