import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Result, WhiteSpace, List } from 'antd-mobile';

class User extends Component {

  render () {
    const { user } = this.props;
    const { Item } = List;
    const { Brief } = Item;
    console.log(user);
    return (
      <div>
        <Result
          img={<img src={require(`../../img/avatar/${user.avatar}.png`)} style={{ width: 50 }} alt='用户头像' />}
          title={user.user}
          message={user.type === 'Boss' ? user.company : null} />
        <List renderHeader={() => ('简介')}>
          <Item>
            {user.title}
            {user.description.split('\n').map((item, index) => {
              return <Brief key={index}>{item}</Brief>;
            })}
          </Item>

        </List>
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);