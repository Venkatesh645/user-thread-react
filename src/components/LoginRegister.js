import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions/registerLogin.actions';
import { successAlertHandler, failureAlertHandler } from '../actions/alert.actions';

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
    }
    this.inputChange = this.inputChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  loginSubmit = (e) => {
    debugger
    e.preventDefault();
    const { login, history, failureAlertHandler, successAlertHandler } = this.props;
    login(this.state)
      .then((res) => {
        debugger
        if(res.type === "LOGIN_REQUEST_FAILURE") return failureAlertHandler(res.error);
        successAlertHandler(res.resp.message);
        history.push('/thread/list');
      })
  };

  onRegisterSubmit = (e) => {
    e.preventDefault();
    const { register, failureAlertHandler, successAlertHandler  } = this.props;
    register(this.state)
      .then((res) => {
        if(res.type === "LOGIN_REQUEST_FAILURE") return failureAlertHandler(res.error);
        successAlertHandler(res.resp.message);
        this.setState({
          username: '',
          password: ''
        })
      })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className='login-register-wrapper'>
        <form class="form-horizontal login-register-form" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Username:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" value={username} name='username' onChange={this.inputChange} placeholder="Enter email" />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" value={password} name='password' onChange={this.inputChange} id="pwd" placeholder="Enter password" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10 login-register-btn-wrp">
              <button type="submit" class="btn btn-default" onClick={this.loginSubmit}>Login</button>
              <button type="submit" class="btn btn-primary" onClick={this.onRegisterSubmit}>Register</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const actions = {
  login,
  register,
  successAlertHandler,
  failureAlertHandler
}

export default connect(mapStateToProps, actions)(LoginRegister);