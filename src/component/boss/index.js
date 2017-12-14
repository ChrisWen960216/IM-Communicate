import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../../redux/chat/action';
import UserCard from '../userCard';
class BossComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  componentDidMount () {
    this.props.getUserList.call(undefined, 'Genius');
  }
  render () {
    // if (!this.props.chat) {
    //   return (<h1>没有什么好看的-Genius</h1>);
    // }
    return (<UserCard userList={this.props.chat}/>);
  }
}

function mapStateToProps (state) {
  return {
    chat: state.chat.userList.data
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    getUserList: (data) => {dispatch(getUserList(data));}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BossComponent);