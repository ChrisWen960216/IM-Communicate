/** Created By ChrisWen
 *  17/12/06
 *  GeniusInfo
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

import AvatarSelector from '../../component/avatarSelector';

import { update } from '../../redux/user/action';

class GeniusInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      salary: '',
      description: '',
      avatar: ''
    };
    this.selectAvatar = this.selectAvatar.bind(this);
    this.update = this.update.bind(this);
  }

  handleChange (key, value) {
    this.setState({
      [key]: value
    });
  }

  selectAvatar (element) {
    this.setState({
      avatar: element.text
    });
  }

  update () {
    const data = this.state;
    this.props.update(data);
  }

  render () {
    const path = this.props.location.pathname;
    const redirect = this.props.user.redirectTo;
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={this.props.user.redirectTo}/>:null}
        <NavBar mode='dark'>牛人完善信息页面</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar}/>
        <InputItem onChange={(value) => {this.handleChange('title', value);}}>求职岗位</InputItem>
        <TextareaItem onChange={(value) => {this.handleChange('description', value);}} rows={3} title='个人简介' autoHeight/>
        <Button type='primary' onClick={this.update}>保存</Button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  };
}
function mapDispatchToProps (dispatch, ownProps) {
  return {
    update: data => {dispatch(update(data));}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeniusInfo);