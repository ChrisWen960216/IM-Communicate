import React, { Component } from 'react';
import axios from 'axios';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

export default class GeniusComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  componentDidMount () {
    axios.get('/users/list?type=Boss').then(response => {
      console.log(response);
      if (response.data.code === 0) {
        this.setState({
          data: response.data.data
        }, () => {console.log(this.state);});
      }
    });
  }
  render () {
    if (!this.state.data) {
      return (<h1>没有什么好看的</h1>);
    }
    const { Header, Body } = Card;
    return (
      <WingBlank>
        <WhiteSpace/>
        {this.state.data.filter(item => item.avatar).map((item, index) => {
          return (<Card key={index}>
            <Header title={item.user} thumb={require(`../../img/avatar/${item.avatar}.png`)} extra={<span>{item.company}</span>}></Header>
            <Body>{item.description.split('\n').map((_item, _index) => {
              return <div key={_index}>{_item}</div>;
            })}</Body>
          </Card>);
        })}
      </WingBlank>
    );
  }
}