import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { doLogout } from '../actions'
import {Link} from 'react-router';


class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (


      <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-toggleable-md" id="navbarResponsive">
        <img className="navbar-brand" src="http://quobits.com/assets/img/logo_color.svg" style={{height:'45px'}} />

          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="dashboard" activeClassName="active">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="profile" activeClassName="active">Profile</Link>
            </li>
          </ul>

          <nav className="nav navbar-nav float-lg-right">
            <a className="nav-item nav-link" href="#" onClick={(e) => {e.preventDefault(); this.props.doLogout()}}>Logout</a>
          </nav>

        </div>
      </nav>






      );
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return { doLogout: bindActionCreators(doLogout, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Navbar)
