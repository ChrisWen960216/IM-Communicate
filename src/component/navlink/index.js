import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { TabBar } from 'antd-mobile';

class NavLinkBar extends Component {
  static propTypes = {
    data: propTypes.array.isRequired
  }
  render () {
    const navList = this.props.data.filter(item => !item.hide);
    const { pathname } = this.props.location;
    return (
      <TabBar>
        {navList.map((item, index) => {
          return (
            <TabBar.Item
              key={index}
              title={item.text}
              icon={{ uri: require(`../../img/navimg/${item.icon}.png`) }}
              selectedIcon={{ uri: require(`../../img/navimg/${item.icon}-active.png`) }}
              selected={pathname === item.path}
              onPress={() => { this.props.history.push(item.path); }}
            >
            </TabBar.Item>);
        })}
      </TabBar>
    );
  }
}
function mapStateToProps (state) {
  return {
    user: state
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavLinkBar));