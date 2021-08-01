import React from 'react';
import '../CSS/see-more.css';
import WorkNavItem from './work-nav-item';
import projects from "../../projects.js"

export default function SeeMore(props) {
    return (
        <div className="seeMore">

            <hr className="footer-hr"></hr>

            <div className="see-more-content">
                <h2 id="other-pr-heading">More projects</h2>
                <div className="featured-projects">
                    <WorkNavItem project={projects[props.project1]} className="see-more-image"/>
                    <WorkNavItem project={projects[props.project2]} className="see-more-image"/>
                </div>
            </div>

        </div>
    )
}