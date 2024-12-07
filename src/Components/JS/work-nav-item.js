import React from 'react';
import { Link } from "react-router-dom";
import ProjectGrid from '../../Components/JS/projectgrid.js';

export default function WorkNavItem(props) {
    return (
        <div className="project-hitbox">
            {/* add class to div above to make hover apply to image and span simultaneously */}
            <div className={props.className} id={props.project.id} >
                <Link to={props.project.link} className="projectLink">
                    <div className="title">
                        
                    </div>
                </Link>
            </div>
            <Link to={props.project.link} className="projectLink">   
                <div className='project-label'>
                    <span className="project-label-sml">{props.project.title}</span>
                    <span className="project-label-sml" id="light-text">{props.project.year}</span>
                    {/* <h4>{props.project.workType}</h4>
                    <p className="home-caption">{props.project.description}</p> */}
                </div>
            </Link>    
        </div>
    );
}