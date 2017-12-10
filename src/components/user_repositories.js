import React, { Component } from 'react';

class UserRepositories extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos_url: props.user.repos_url,
      repos: null
    }
    this.repoSearch();
  }

  repoSearch() {
    return fetch(this.state.repos_url)
      .then(response => response.json())
      .then(response => this.setState({repos: response}));
  }

  render() {
    if(!this.state.repos)
      return (
        <div>Loading</div>
      );
    console.log(this.state.repos[0]);
    return (
        <ul>
          A list of repositories
        </ul>
    );
  }
}


  // const userItems = props.users.items.map((user) => {
  //   return <UserListItem key={user.login} user={user}/>
  // });


export default UserRepositories;
