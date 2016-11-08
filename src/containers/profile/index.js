import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserProfile } from '../../actions';


// get all the other necessary components

import ProfileForm from './form_profile';
import PasswordForm from './form_password';
import AccountForm from './form_account';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount()  {
    this.props.getUserProfile();
  }

  render() {
    return (
      <div>
        <div className="col-md-12" style={{ textAlign: 'center' }}>
          <img src="http://istc-pc-test-media.cs.washington.edu/images/default-profile-pic.png" style={{borderRadius: '50%', height: '150px'}}/>
          <br/><br/>
          <h4>{this.props.profile.name}</h4>
          <p>@{this.props.profile.username} . Member since 20/08/2016</p>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#profile-tab" role="tab">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#account-tab" role="tab">Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#password-tab" role="tab">Password</a>
          </li>
        </ul>

        <div className="tab-content">

          {/* Main Tab */}
          <div className="col-md-12 tab-pane active" style={{ paddingTop: '20px', borderTop: '0px solid #999' }} id="profile-tab" role="tabpanel">
            <div className="col-md-3">
              <h3>Main Settings</h3>
              <p>This information will appear on your profile.</p>
            </div>

            <div className="col-md-6">
              < ProfileForm />
            </div>
          </div>

          {/* Account Tab */}
          <div className="col-md-12 tab-pane" style={{ paddingTop: '20px', borderTop: '0px solid #999' }} id="account-tab" role="tabpanel">

            <AccountForm />

          </div>

          {/* Password Tab */}
          <div className="col-md-12 tab-pane" style={{ paddingTop: '20px', borderTop: '0px solid #999' }} id="password-tab" role="tabpanel">
            <div className="col-md-3">
              <h3>Password Settings</h3>
              <p>After a successful password update, you will be redirected to the login page where you can log in with your new password.</p>
            </div>

            <div className="col-md-6">
              <PasswordForm />
            </div>
          </div>

        </div>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return { getUserProfile: bindActionCreators(getUserProfile, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
