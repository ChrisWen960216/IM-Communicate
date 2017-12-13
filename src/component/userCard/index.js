import React, { Component } from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

export default class UserCard extends Component {
  render () {
    const { Header, Body } = Card;
    const { userList } = this.props;
    console.log(userList);
    return (
      <WingBlank>
        <WhiteSpace/>
        {userList.filter(item => item.avatar).map((item, index) => {
          return [
            <WhiteSpace/>,
            <Card key={index}>
              <Header title={item.user} thumb={require(`../../img/avatar/${item.avatar}.png`)} extra={<span>{item.company}</span>}></Header>
              <Body>{item.description.split('\n').map((_item, _index) => {
                return <div key={_index}>{_item}</div>;
              })}</Body>
            </Card>,
            <WhiteSpace/>
          ];
        })}

      </WingBlank>
    );
  }
}