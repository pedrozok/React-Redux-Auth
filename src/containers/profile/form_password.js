import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class PasswordForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="currentPassword">Current password</label>
           <input type="password" className="form-control" id="currentPassword"/>
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New password</label>
           <input type="password" className="form-control" id="newPassword" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">New password</label>
           <input type="password" className="form-control" id="confirmPassword" />
        </div>

          <input type="button" type="submit" className="btn btn-primary" value="Submit" />

      </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(PasswordForm)
