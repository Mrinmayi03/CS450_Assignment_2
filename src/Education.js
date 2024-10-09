import React, { Component } from 'react';
class Education extends Component {
    render() {
        return (
            <div className="hd5">
                <div className="hd5_c1">
                    <p><strong><i>{this.props.education.main}</i></strong></p>
                </div>

                <div className="Levels">
                    <div className="Bachelors">
                        <p><strong>{this.props.education.level_1}</strong></p>
                        <p>{this.props.education.course_1}</p>
                        <p>{this.props.education.year_1}</p>
                        <p>{this.props.education.gpa_1}</p>
                    </div>

                    <div className="Masters">
                        <p><strong>{this.props.education.level_2}</strong></p>
                        <p>{this.props.education.course_2}</p>
                        <p>{this.props.education.year_2}</p>
                        <p>{this.props.education.gpa_2}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Education;