import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getThreads, updateThreadSearch } from '../actions/thread.actions';

const Tag = ({ tags, username, date }) => {
  return <div className='tags-div'>{tags && tags.map(t => {
    return <span className='thread-tag'>{t}</span>
  })}<span className='single-thread-date'>Date: {new Date(date).toLocaleString()}</span>
  <span className='single-thread-username'>Created By: {username}</span>
  </div>
}

const SingleThread = (item) => {
  console.log(item, 'item');
  const { title, username, description, tags } = item;
  return <div className='single-thread-wrapper'>
    <h4>{title}</h4>
    <p>{description}</p>
    <Tag tags={item.tags} username={item.username} date={item.createdDate} />
  </div>
}

let timeout = '';

class Thread extends Component {
  constructor(props){
    super(props);
    this.navigateToCreateThread = this.navigateToCreateThread.bind(this);
    this.filterThreads = this.filterThreads.bind(this);
    this.threadTimeOut = '';
  }

  filterThreads = (event) => {
    const { backItems, updateThreadSearch } = this.props;
      const newArray = [...backItems].filter(i =>
      i.title.toLowerCase().includes(event.target.value));
      clearTimeout(this.threadTimeOut );
   this.threadTimeOut = setTimeout(() => {
      updateThreadSearch(newArray)
      console.log(timeout, 'timeout');
    console.log(newArray, 'newArray');
   }, 300);

  }

  componentDidMount() {
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
        <input type="text" placeholder='search...' className='thread-search-field' onChange={this.filterThreads} />
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
  const { items, backItems } = state.thread;
  return { items, backItems }
}

const actions = {
  getThreads,
  updateThreadSearch,
}

export default connect(mapStateToProps, actions)(Thread);