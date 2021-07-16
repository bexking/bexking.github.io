import React from 'react';
import { Link } from "react-router-dom";

export default function WorkNavItem(props) {
    return (
        <div className={props.className} id={props.project.id} >
            <Link to={props.project.link} className="projectLink">
                <div className="title">
                    <h3 className="homeTitle">{props.project.title}</h3>
                    <h4>{props.project.workType}</h4>
                    <p className="home-caption">{props.project.description}</p>
                </div>
            </Link>
        </div>
    );
}