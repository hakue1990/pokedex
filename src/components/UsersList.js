import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <div key={user.id.value}>
      <h4>
        {user.name.title} {user.name.first}
        {user.name.last}
      </h4>
    </div>
  ));
  return <div>{users}</div>;
};

export default UsersList;
