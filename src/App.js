import React, { Component } from 'react';
import Main from './components/Main';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props, 'cdjdhhjv')
    const { message, error } = this.props;
    return (
      <div className='root-wrapper'>
        {message && <div class="alert alert-success alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          {message}
</div>}
{error && <div class="alert alert-danger alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          {error}
</div>}
        <Main />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { message, error } = state.alert;
  return {message, error}
}

export default connect(mapStateToProps)(App);
