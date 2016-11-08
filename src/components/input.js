import React, { Component } from 'react';

export default class Input extends Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (
        <input type={this.props.type} className="form-control" name={this.props.type} placeholder={this.props.type} required={this.props.type} ref={this.props.ref}/>
    );
  }
}
