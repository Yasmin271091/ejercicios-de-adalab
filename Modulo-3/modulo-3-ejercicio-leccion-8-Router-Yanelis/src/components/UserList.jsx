import React from "react";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  const renderUsers = users.map((user) => {
    return (
      <li class="card" key={user.id}>
        <UserItem user={user} />
      </li>
    );
  });

  return (
    <>
      <ul className="cards">{renderUsers}</ul>
    </>
  );
};

export default UsersList;