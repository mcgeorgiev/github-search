import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import UserList from './components/user_list';
import UserRepositories from './components/user_repositories';

const url = 'https://api.github.com/search/users';
const data = {q: 'dogs'};


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
        <h1>{this.state.selectedUser.login}</h1>
        <UserRepositories user={this.state.selectedUser}/>

        <SearchBar />
        <UserList
          onUserSelect={selectedUser => {
            this.setState({selectedUser})
          }}
          users={this.state.users} />
      </div>
    );
  }
}


// <App /> = instance of the class of App
ReactDOM.render(<App/>, document.querySelector('.container'));
