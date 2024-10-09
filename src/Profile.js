import React, { Component } from 'react';
class Profile extends Component {
    render() {
        return (
        <div className="hd2">
            <div className ="hd2_content">
                <div className="hd2_c1">
                    <p><i><strong>{this.props.profileInfo.main}</strong></i></p>  
                </div>
                <div className="hd2_c2">
                    <p>{this.props.profileInfo.content}</p>     
                </div>
            </div>
            <div className="hd2_line">
            <p>
                <hr></hr>
            </p>
            </div>     
        </div>
        );
    }
}
export default Profile;