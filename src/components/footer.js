import React, { Component } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <footer className="footer">
        <div className="footer-container" style={{textAlign: 'center'}}>
          <span className="text-muted"><i className="fa fa-code"></i> with <i className="fa fa-heart" style={{ color:'#FF4081', paddingTop:'20px' }}></i> by quobits - 2016</span>
        </div>
      </footer>
    );
  }
}
