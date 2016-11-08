import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class AccountForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>

        <div className="col-md-12">
          <div className="col-md-3">
            <h3>Private Token</h3>
            <p>Your private token is used to access application resources without authentication.</p>
          </div>

          <div className="col-md-6">

              <div className="form-group">
                <label htmlFor="inputToken">Private token</label>
                 <input type="text" className="form-control" id="inputToken" defaultValue={this.props.profile.token  ? this.props.profile.token : ''} />
              </div>

          </div>
        </div>

        <div className="col-md-12">
          <div className="col-md-3">
            <h3>Change username</h3>
            <p>You can only change your username once, choose wisely young kenobi!</p>
          </div>

          <div className="col-md-6">

              <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                 <input type="text" className="form-control" id="inputUsername" defaultValue={this.props.profile.username  ? this.props.profile.username : ''} />
              </div>

              <input type="button" type="submit" className="btn btn-primary" value="Submit" />

          </div>
        </div>

        </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return { doLogin: bindActionCreators(doLogin, dispatch) }
}

export default connect(mapStateToProps)(AccountForm)
