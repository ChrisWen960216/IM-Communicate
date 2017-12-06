/** Created By ChrisWen
 *  17/12/06
 *  BossInfo
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

class BossInfo extends Component {
  render () {
    return (
      <div>
        <NavBar mode='dark'>BOSS完善信息页面</NavBar>
      </div>
    );
  }
}

export default connect()(BossInfo);