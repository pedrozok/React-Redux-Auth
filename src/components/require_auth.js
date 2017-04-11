import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications, {notify} from 'react-notify-toast';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated.authenticated) {

        notify.show('Please login first', 'error', 3000);
        this.context.router.push('/');

      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated.authenticated) {
         notify.show('Please login first', 'error', 3000);
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
