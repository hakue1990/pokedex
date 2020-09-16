import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <div key={user.id.value}>
      <h4>
        <img src={user.picture.large} />
        <br />
        {user.name.title} {user.name.first}
        {user.name.last}
        <br />
        {user.gender}
        <br />
        <br />
      </h4>
    </div>
  ));
  return <div>{users}</div>;
};

export default UsersList;
