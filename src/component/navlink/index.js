import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { TabBar } from 'antd-mobile';

class NavLinkBar extends Component {
  static propTypes = {
    data: propTypes.array.isRequired
  }
  render () {
    console.log(this.props);
    const navList = this.props.user.data.filter(item => !item.hidden);
    return (
      <TabBar>
        {navList.map((item, index) => {
          return (
            <TabBar.Item
              key={index}
              title={item.text}
              // icon={{ url: require(`./img/${item.icon}.png`) }}
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

export default connect(mapStateToProps, mapDispatchToProps)(NavLinkBar);