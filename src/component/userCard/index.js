import React, { Component } from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

export default class UserCard extends Component {
  render () {
    const { Header, Body } = Card;
    const { userList } = this.props;
    return (
      <WingBlank>
        {userList.filter(item => item.avatar).map((item, index) => {
          return (
            <div key={index}>
              <WhiteSpace/>
              <Card >
                <Header title={item.user} thumb={require(`../../img/avatar/${item.avatar}.png`)} extra={<span>{item.company}</span>}></Header>
                <Body>{item.description.split('\n').map((_item, _index) => {
                  return <div key={_index}>{_item}</div>;
                })}</Body>
              </Card>
            </div>
          );
        })}

      </WingBlank>
    );
  }
}