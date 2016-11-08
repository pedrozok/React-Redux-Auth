import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { doLogin } from '../actions'

import Notifications, {notify} from 'react-notify-toast';

class Login extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.authenticated.authenticated) {
      this.context.router.push('/dashboard');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated.authenticated) {
      this.context.router.push('/dashboard');
    }
  }

  doLogin(e) {
    e.preventDefault()

    this.props.doLogin({
      username: this.refs.txt_username.value,
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
          <form className="form-signin" onSubmit={this.doLogin.bind(this)}>
            <input type="text" className="form-control" name="username" placeholder="Username" required="true" ref="txt_username"/>
            <input type="password" className="form-control" name="password" placeholder="Password" required="true" ref="txt_password"/>
           <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
         </form>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated : state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return { doLogin: bindActionCreators(doLogin, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
