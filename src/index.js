import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import UserList from './components/user_list';
import UserRepositories from './components/user_repositories';
// need to handle errors

const url = 'https://api.github.com/search/users';
const data = {q: 'mcgeorgiev'};

// fetch(`${url}?q=${data.q}`)
// .then(d => d.json())
// .then(d => {
//   console.log(d)
// });

// fetch('https://api.github.com/users/mcgeorgiev/repos')
//   .then(d => d.json())
//   .then(d => {
//     console.log(d)
//   })



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null
    };

    this.userSearch();
  }

  userSearch() {
    return fetch(`${url}?q=${data.q}`)
      .then(users => users.json())
      .then(users => this.setState({
        users: users,
        selectedUser: users.items[0]
      }));
  }

  render() {
    if((this.state.users.length === 0) || (this.state.selectedUser === null)) {
      return <div>Loading</div>
    }
    return (
      <div>
        <SearchBar />
        <UserList users={this.state.users} />
        <UserRepositories user={this.state.selectedUser}/>
      </div>
    );
  }
}


// <App /> = instance of the class of App
ReactDOM.render(<App/>, document.querySelector('.container'));
