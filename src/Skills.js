import React, { Component } from 'react';
class Skills extends Component{
    render() {
        return(
            <div className="hd4">

                <div className="hd4_content">
                    <div className="hd4_c1">
                        <p><strong><i>{this.props.skill_sets.main}</i></strong></p>
                    </div>

                    <div className="hd4_skills">
                        <div className="hd4_c2">
                            <p>{this.props.skill_sets.p1_s1}</p>
                            <p>{this.props.skill_sets.p1_s2}</p>
                            <p>{this.props.skill_sets.p1_s3}</p>
                        </div>

                        <div className="hd4_c3">
                            <p>{this.props.skill_sets.p2_s1}</p>
                            <p>{this.props.skill_sets.p2_s2}</p>
                            <p>{this.props.skill_sets.p2_s3}</p>
                        </div>

                        <div className="hd4_c4">
                            <p>{this.props.skill_sets.p3_s1}</p>
                            <p>{this.props.skill_sets.p3_s2}</p>
                            <p>{this.props.skill_sets.p3_s3}</p>
                        </div>
                    </div>
                </div>


                <div className="hd4_line">
                    <p>
                        <hr></hr>
                    </p>
                </div>
            </div>
        )
    }
}

export default Skills;