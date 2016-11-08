import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { doLogin } from '../actions'

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Welcome to the Dashboard </h1>
        <p onClick={() => { console.log(this.props.authenticated); }}>test here</p>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.auth
  }
}

export default connect(mapStateToProps)(Dashboard)
