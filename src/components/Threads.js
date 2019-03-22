import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getThreads } from '../actions/thread.actions';

const Tag = ({ tags }) => {
  debugger
  return <div>{tags && tags.map(t => {
    return <span>{t}</span>
  })}</div>
}

const SingleThread = (item) => {
  const { title, username, description, tags } = item;
  debugger
  return <div className='single-thread-wrapper'>
    <h4>{title}</h4>
    <p>{description}</p>
    <Tag tags={item.tags} />
  </div>
}

class Thread extends Component {
  constructor(props){
    super(props);
    this.navigateToCreateThread = this.navigateToCreateThread.bind(this);
  }

  componentDidMount() {
    debugger
    const { getThreads } = this.props;
    getThreads();
  }

  navigateToCreateThread = () => {
    const { history } = this.props;
    history.push('/thread/create');
  }

  render() {
    const { items } = this.props;
    return (
      <div className='threads-list-wrapper'>
        <div className='subname-wrapper'>
          <h3>Threads</h3>
          <button className='thread-search-button-wrapper' >
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
        <input type="text" placeholder='search...' className='thread-search-field' />
        </div>
        <hr />
        <div className='thread-list'>
          {items && items.map(item => <SingleThread key={item.id} {...item} />)}
        </div>
        <button className='add-thread-btn' onClick={this.navigateToCreateThread} >
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { items } = state.thread;
  return { items }
}

const actions = {
  getThreads,
}

export default connect(mapStateToProps, actions)(Thread);