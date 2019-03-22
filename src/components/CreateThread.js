import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createThreads } from '../actions/thread.actions';

class CreateThread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      description: undefined,
      tags: undefined
    }
    this.createThreadSubmit = this.createThreadSubmit.bind(this);
  }

  componentDidMount() {
    const { getThreads } = this.props;

  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  createThreadSubmit = (e) => {
    debugger
    e.preventDefault();
    const { createThreads } = this.props;
    createThreads(this.state)
      .then(resp => {
        debugger
      })
      .catch(error => {
        debugger
        console.log('error', error);
      })
  }


  render() {
    const { title, description, tags, } = this.state;
    return (
      <div className='new-thread-form-wrapper'>
        <h3>New Thread</h3>
        <hr/>
        <form className='new-thread-form'>
          <label>Title <span>:</span> </label>
          <input type='text' value={title} name='title' placeholder="User thread 1" onChange={this.inputChange} /><br />
          <label className='description-label'>Description <span>:</span> </label>
          <div></div>
          <textarea type='text' value={description} name='description' placeholder=""
            onChange={this.inputChange} rows="4" cols="50" /><br />
          <label>Tags <span>:</span></label>
          <input type='text' value={tags} name='tags' placeholder="Tags are seperated by comma." onChange={this.inputChange} /><br />
          <input type='submit' value='Create' className='btn btn-default'
            onClick={this.createThreadSubmit} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { items } = state.thread;
  return { items }
}

const actions = {
  createThreads,
}

export default connect(mapStateToProps, actions)(CreateThread);