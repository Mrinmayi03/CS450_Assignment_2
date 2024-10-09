import React, { Component } from 'react';
class WorkExperience extends Component{
    render(){
        return(
            <div className="hd3">
                <div className="hd3_content">
                    <div className="hd3_c1">
                        <p><strong><i>{this.props.workExperience.main}</i></strong></p>
                    </div>

                    <div className="hd3_Jobs">
                        <div className="hd3_c2">
                            <p><strong>{this.props.workExperience.title_1}</strong></p>
                            <p>{this.props.workExperience.content_1}</p>
                        </div>
                        <div className="hd3_c3">
                            <p><strong>{this.props.workExperience.title_2}</strong></p>
                            <p>{this.props.workExperience.content_2}</p>
                        </div>
                    </div>
                </div>

                <div className = "hd3_line">
                    <p>
                        <hr></hr>
                    </p>
                </div>
            </div>
        )
    }
}

export default WorkExperience;