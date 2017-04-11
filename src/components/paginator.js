import React, { Component } from 'react';

export default class Paginator extends Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (

        /**
         * 
         * this component will receive the following props: 
         * pageNumber
         * pageSize
         * totalCount
         * url to call
         * container to replace
         * callbacks to run
         * 
         *  
         * 
         * 
         * 
         */

        <input type={this.props.type} className="form-control" name={this.props.type} placeholder={this.props.type} required={this.props.type} ref={this.props.ref}/>
    );
  }
}
