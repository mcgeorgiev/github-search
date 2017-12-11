import React, { Component } from 'react';
import Repo from './repo';

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

  componentWillReceiveProps(newProps) {
      this.setState({repos_url: newProps.user.repos_url});
      this.repoSearch();
  }

  render() {
    console.log(this.state);
    if(!this.state.repos)
      return (
        <div>Loading</div>
      );
    const repo_list = this.state.repos.map((repo) => {
      return (
        <Repo
          repo={repo}
          key={repo.id}/>
      );
    });

    return (
        <ul>
          {repo_list}
        </ul>
    );
  }
}



export default UserRepositories;
