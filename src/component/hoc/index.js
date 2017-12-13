import React, { Component } from 'react';

export default function CreateHOC (component) {
  return class WrappedComponent extends Component {
    constructor (props) {
      super(props);
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (key, value) {
      this.setState({
        [key]: value
      });
    }

    render () {

    }
  };
}