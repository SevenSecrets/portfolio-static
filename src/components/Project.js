import React, { Component } from 'react';
import '../styles/Project.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name, description: props.description, siteLink: props.siteLink, gitHubLink: props.gitHubLink }
    }

    render() {
        return(
            <div className="Project">
                <h4>{this.state.name}</h4>
                <p>{this.state.description}</p>
                {this.state.siteLink && <a className="project-link" href={this.state.siteLink} target="_blank" rel="noopener noreferrer">Website</a>}
                <a className="project-link" href={this.state.gitHubLink} target="_blank"  rel="noopener noreferrer">GitHub</a>
            </div>
        );
    }
}

export default Projects;