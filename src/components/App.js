import React from "react";
import "./App.css";
import Input from "./Input";
import FetchButton from "./FetchButton";
import UsersList from "./UsersList";

class App extends React.Component {
  state = {
    users: null,
  };
  fetchData = () => {
    const API = "https://randomuser.me/api/";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data.results,
        });
      });
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <h1>Pokedex</h1>
        <Input />
        <FetchButton click={this.fetchData} />
        {users ? <UsersList users={this.state.users} /> : users}
      </div>
    );
  }
}

export default App;
