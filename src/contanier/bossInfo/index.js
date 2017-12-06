/** Created By ChrisWen
 *  17/12/06
 *  BossInfo
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../component/avatarSelector';

class BossInfo extends Component {
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
  }

  handleChange (key, value) {
    this.setState({
      [key]: value
    });
  }

  selectAvatar (element) {
    this.setState({
      avatar: element
    });
  }

  render () {
    return (
      <div>
        <NavBar mode='dark'>BOSS完善信息页面</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar}/>
        <InputItem onChange={(value) => {this.handleChange('title', value);}}>招聘职位</InputItem>
        <InputItem onChange={(value) => {this.handleChange('company', value);}}>公司名称</InputItem>
        <InputItem onChange={(value) => {this.handleChange('salary', value);}}>职位薪资</InputItem>
        <TextareaItem onChange={(value) => {this.handleChange('description', value);}} rows={3} title='职位要求' autoHeight/>
        <Button type='primary'>保存</Button>
      </div>
    );
  }
}

export default connect()(BossInfo);