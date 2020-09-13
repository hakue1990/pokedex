import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <div key={users.id.value}>
      <h4>
        {user.name.title} {user.name.last}
      </h4>
    </div>
  ));
  return <ul>{users}</ul>;
};

export default UsersList;
