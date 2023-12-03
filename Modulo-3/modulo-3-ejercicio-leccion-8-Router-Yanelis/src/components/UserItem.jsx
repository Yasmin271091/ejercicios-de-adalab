import React from "react";

const UserItem = ({ user }) => {
  return (
    <>
      <a href="#">
        <img
          class="card__img"
          src={user.picture}
          alt={user.name}
          title={user.name}
        />
        <h4 class="card__title">{user.name}</h4>
        <p class="card__description">{`${user.country} / ${user.gender}`}</p>
      </a>
    </>
  );
};

export default UserItem;