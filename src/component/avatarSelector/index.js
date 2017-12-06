import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';
// import { connect } from 'react-redux';
// import { selectAvatar } from '../../redux/user/action';

export default class AvatarSelector extends Component {
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
    const avatarList = 'logo,logo,logo,logo,logo'.split(',').map(value => ({
      icon: require(`../../img/${value}.png`),
      text: value
    }));

    const gridHeader = this.state.avatar ? (<div><img src={this.state.avatar.icon} alt="头像" style={{ width: 50 }}/></div>): <div>请选择头像</div>;
    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid data={avatarList} columnNum={5} onClick={(element) => {this.selectAvatar(element);}}>头像选择</Grid>
        </List>
      </div>
    );
  }
}