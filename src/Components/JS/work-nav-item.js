import React from 'react';
import { Link } from "react-router-dom";

export default function WorkNavItem(props) {
    return (
        <div>
            <div className={props.className} id={props.project.id} >
                <Link to={props.project.link} className="projectLink">
                    <div className="title">
                        
                    </div>
                </Link>
            </div>
            <Link to={props.project.link} className="projectLink">   
                <div className='project-label'>
                    <span className="project-label-sml">{props.project.title}</span>
                    <span className="project-label-sml" id="light-text">YEAR</span>
                    {/* <h4>{props.project.workType}</h4>
                    <p className="home-caption">{props.project.description}</p> */}
                </div>
            </Link>    
        </div>
    );
}