import React from 'react';
import Collapsible from 'react-collapsible';
import '../styles/Project.css';

function Project(props) {
	return(
		<div className="project">
            <Collapsible trigger={props.name}>
                <p className="desc">{props.description}</p>
                <div className="links">
                    {props.siteLink && <a className="project-link" href={props.siteLink} target="_blank" rel="noopener noreferrer">Website</a>}
                    <a className="project-link" href={props.gitHubLink} target="_blank"  rel="noopener noreferrer" alt="">GitHub</a>
                </div>
            </Collapsible>
        </div>
	)
}

export default Project;