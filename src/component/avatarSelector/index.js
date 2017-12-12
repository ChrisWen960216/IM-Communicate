import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';
import PropTypes from 'prop-types';
import { avatarList } from './config';
// import { connect } from 'react-redux';
// import { selectAvatar } from '../../redux/user/action';

export default class AvatarSelector extends Component {
  static PropTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props);
    this.state = {
      avatar: ''
    };
  }
  selectAvatar (element) {
    this.props.selectAvatar(element);
    this.setState({
      avatar: element
    });
  }

  render () {
    const _avatarList = avatarList.map(value => ({
      icon: require(`../../img/avatar/${value}.png`),
      text: value
    }));

    const gridHeader = this.state.avatar ? (<div><img src={this.state.avatar.icon} alt="头像" /></div>): <div>请选择头像</div>;
    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid data={_avatarList} columnNum={5} onClick={(element) => {this.selectAvatar(element);}}>头像选择</Grid>
        </List>
      </div>
    );
  }
}