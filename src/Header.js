import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div className="hd1">
        <div className="hd1_content">
          <div className="hd1_c1">
            <div>
              <p><strong>{this.props.personInfo.name}</strong></p>
              <p>{this.props.personInfo.occupation}</p>
              {/* <p>{this.props.personInfo.name}</p> */}
            </div>
          </div>
          <div className="hd1_c2">
            <div>
              <p>Email: {this.props.contactInfo.email}</p>
              <p>Web: {this.props.contactInfo.web}</p>
              <p>Mobile: {this.props.contactInfo.mobile}</p>
            </div>
          </div>
        </div>
        <div className="hd1_line">
          <p>
            <hr></hr>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;