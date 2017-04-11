import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { doRegistration } from '../actions'

import Notifications, {notify} from 'react-notify-toast';

class Register extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentWillUpdate(nextProps) {
  }

  doRegistration(e) {
    e.preventDefault()

    this.props.doRegistration({
      username: this.refs.txt_username.value,
      email: this.refs.txt_email.value,
      password: this.refs.txt_password.value
    });
  }

  render() {
    return (
      <div className="login-wrapper">
        <Notifications />

        <div className="logo-container">
          <img src="http://quobits.com/assets/img/logo_dotted.png" className="login-logo" />
        </div>

        <div className="form-container">
          <form className="form-signin" onSubmit={this.doRegistration.bind(this)}>
            <input type="text" className="form-control" name="username" placeholder="Username" required="true" ref="txt_username"/>
            <input type="text" className="form-control" name="email" placeholder="email" required="true" ref="txt_email"/>
            <input type="password" className="form-control" name="password" placeholder="Password" required="true" ref="txt_password"/>
           <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>

         </form>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return { doRegistration: bindActionCreators(doRegistration, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
