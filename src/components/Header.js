/* global localStorage */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { usernameToStore, removeUserNameFromStore } from '../actions/registerLogin.actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    const { usernameToStore } = this.props;
    debugger
    usernameToStore()
  }

  logout = () => {
    debugger
    const { history, removeUserNameFromStore } = this.props;
    history.push('/');
    localStorage.clear();
    removeUserNameFromStore();
  }

  showUserName = (username) => {
    debugger
    if(username){
      return <div><div className='username-wrapper'>
          <span>{username}</span>
        </div><span className='logout' onClick={this.logout}>logout</span></div>
    }
    else{
      return <div className='login-register-title-div'> <span>Login / Register</span> </div>
    }
  }

  render() {
    const { loggedInUsername } = this.props;
    return (
      <div className='header-wrapper'>
      <button type="button" class="btn btn-default btn-lg">
        <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
          {this.showUserName(loggedInUsername)}
        </button>
        <h2>Decoder</h2>

      </div>
    )
  }

};

const mapStateToProps = state => {
  debugger
  const {loggedInUsername} = state.registerLogin;
  return {loggedInUsername}
}

const actions = {
  usernameToStore,
  removeUserNameFromStore,
}

export default withRouter(connect(mapStateToProps, actions)(Header));