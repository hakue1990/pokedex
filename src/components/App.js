import React from "react";
import "./App.css";
import Input from "./Input";
import FetchButton from "./FetchButton";
import UsersList from "./UsersList";

class App extends React.Component {
  state = {
    users: [],
  };
  fetchData = () => {
    const API = "https://randomuser.me/api/?results=2";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const user = data.results;
        this.setState({
          users: this.state.users.concat(user),
        });
      });
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <h1>Users</h1>
        <Input />
        <FetchButton click={this.fetchData} />
        {users ? <UsersList users={this.state.users} /> : users}
      </div>
    );
  }
}

export default App;
