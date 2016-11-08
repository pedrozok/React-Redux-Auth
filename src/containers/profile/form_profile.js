import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateInput } from '../../actions/profile'

class ProfileForm extends Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.updateInput(e.target.name, e.target.value);
  }

  render() {
    return (
      <form>

        <div className="form-group">
          <label htmlFor="inputName">Name</label>
           <input type="text" className="form-control" id="inputName" name="name" value={this.props.profile.name ? this.props.profile.name : ''} onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
           <input type="email" className="form-control" id="inputEmail" name="email" value={this.props.profile.email ? this.props.profile.email : ''} onChange={this.handleInputChange} />
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

function mapDispatchToProps(dispatch) {
  return { updateInput: bindActionCreators(updateInput, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
