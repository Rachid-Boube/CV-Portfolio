import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.9 },
      { id: 2, value: "Html&Css", xp: 1 },
      { id: 3, value: "Python", xp: 0.7 },
      { id: 4, value: "Java", xp: 0.3 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.6 },
      { id: 2, value: "Express", xp: 0.6 },
      { id: 3, value: "Material UI", xp: 0.3 },
      { id: 4, value: "Bootstrap", xp: 0.8 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}
