import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Notifications, {notify} from 'react-notify-toast';

import Navbar from '../containers/navbar.js';
import Footer from '../components/footer.js';

require('../../sass/main.scss');

class App extends Component {

  render() {

        return (
          <div>
              <Notifications />

              <Navbar />

              <div className="container">
              {this.props.children}
              </div>

              <Footer />
          </div>
        );

  }

}

function mapStateToProps(state) {
  return {
    hello: state.hello,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
