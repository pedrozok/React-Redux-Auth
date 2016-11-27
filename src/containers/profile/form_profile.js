import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateInput } from '../../actions/profile';

// Redux-Form decoration
import { Field, reduxForm } from 'redux-form';

class ProfileForm extends Component {

  constructor(props) {
    super(props);
  }

  handleInitialize() {
    const initData = {
      "name": this.props.profile.name,
      "email": this.props.profile.email
    };

    this.props.initialize(initData);
  }

  handleFormSubmit(formProps) {
    console.log(formProps);
  }

  componentDidMount() {
    this.handleInitialize();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <Field name="name" className="form-control" component="input" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <Field name="email" className="form-control" component="input" type="text" />
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
  return {}
}

// Creating an instance of reduxForm
ProfileForm = reduxForm({
  form: 'profile' // a unique name for this form
})(ProfileForm)
// In v6 we must use the connect function from react-redux so web cant use mapStateToProps and mapDispatchToProps
ProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm)

export default ProfileForm
