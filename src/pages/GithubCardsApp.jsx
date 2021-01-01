import axios from 'axios';
import React, { Component } from 'react';

import './GithubCardsApp.css';

export default class GithubCardsApp extends Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <h1>Github Cards App</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="placeholder" height="75px" />
        <div className="info">
          <div className="name"> {profile.name} </div>
          <div className="company"> {profile.company} </div>
        </div>
      </div>
    );
  }
}

const CardList = ({ profiles }) => (
  <div>
    {profiles.map((profile) => (
      <Card {...profile} key={profile.id} />
    ))}
  </div>
);

class Form extends Component {
  state = {
    userName: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );
      this.props.onSubmit(response.data);
      this.setState({ userName: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{display: 'inline-block'}}>
          <label style={{display: 'block', textAlign: 'left'}} htmlFor="username">Username</label>
          <input style={{display: 'block'}}
            type="text"
            id="username"
            placeholder="Github username"
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
            required
          />
        </div>
        <button className="button">Add card</button>
      </form>
    );
  }
}
