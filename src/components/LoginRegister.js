import React, { Component } from 'react';

class LoginRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null,
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange = (event) => {
    debugger
  }

  render(){
    const {username, password} = this.state;
    return(
      <div className='login-register-wrapper'>
      <h4>Login/Register</h4>
      <form>
        <input type='text' value={username} name='username' placeholder="Email..." onChange={this.inputChange} /><br/>
        <input type='password' value={password} name='password' placeholder="**********" /><br/>
        <input type='submit' value='LogIn' className='btn btn-success'/>
        <input type='submit' value='Register' className='btn btn-primary'/>
        </form>
      </div>
      )
  }
}

export default LoginRegister;