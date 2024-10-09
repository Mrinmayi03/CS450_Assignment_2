import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import Profile from './Profile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      profileInfo: {
        main: "Personal Profile",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      workExperience: {
        main: "Work Experience",
        title_1: "Job Title at Company (August 2022 – December 2023)",
        content_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title_2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        content_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      skill_sets: {
        main: "Key Skills",
        p1_s1: "A Key Skill",
        p1_s2: "A Key Skill",
        p1_s3: "A Key Skill",

        p2_s1: "A Key Skill",
        p2_s2: "A Key Skill",
        p2_s3: "A Key Skill",

        p3_s1: "A Key Skill",
        p3_s2: "A Key Skill",
        p3_s3: "A Key Skill"
      },
      education: {
        main: "Education",
        level_1: "New Jersey Institute of Technology",
        course_1: "BS in Computer Science",
        year_1: "2018 - 2022",
        gpa_1: "GPA: 3.9",

        level_2: "New Jersey Institute of Technology",
        course_2: "MS in Data Science",
        year_2: "2022 - 2023",
        gpa_2: "GPA: 4.0"
      }
    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <Profile profileInfo={this.state.profileInfo}></Profile>
        <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
        <Skills skill_sets={this.state.skill_sets}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}
export default App;