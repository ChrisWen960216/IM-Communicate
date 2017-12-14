import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
//import default from 'antd-mobile/lib/tab-bar';

class UserCard extends Component {
  // constructor (props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick (item) {
    console.log(`/chat/${item.user}`);
    this.props.history.push(`/chat/${item.user}`);
  }
  render () {
    const { Header, Body } = Card;
    const { userList } = this.props;
    return (
      <WingBlank>
        {userList.filter(item => item.avatar).map((item, index) => {
          return (
            <div key={index}>
              <WhiteSpace/>
              <Card onClick={() => { this.handleClick(item); }}>
                <Header title={item.user} thumb={require(`../../img/avatar/${item.avatar}.png`)} extra={<span>{item.company}</span>}></Header>
                <Body>
                  {item.description.split('\n').map((_item, _index) => {
                    return <div key={_index}>{_item}</div>;
                  })}
                </Body>
              </Card>
            </div>
          );
        })}
      </WingBlank>
    );
  }
}

export default withRouter(UserCard);