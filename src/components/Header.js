/* global localStorage */
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username')
    }
  }

  showUserName = (username) => {
    if(username !== "undefined"){
      return <div className='username-wrapper'>
          <span>{username}</span>
        </div>
    }else{
      return <div className='login-register-title-div'> <span>Login / Register</span> </div>
    }
  }

  render() {
    const { username } = this.state;
    return (
      <div className='header-wrapper'>
      <button type="button" class="btn btn-default btn-lg">
        <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
          {this.showUserName(username)}
        </button>
        <h2>Decoder</h2>

      </div>
    )
  }

};

export default Header;