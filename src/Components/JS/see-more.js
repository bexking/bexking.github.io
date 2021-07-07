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
                    <WorkNavItem project={projects[props.project1]} />
                    <WorkNavItem project={projects[props.project2]} />
                    {/* <WorkNavItem project={projects[props.project3]} /> */}
                    {/* random project link from complete list of projects, excluding page we are already on - x2 for 13 inch screen, 3 for big screen, 2 in column for mobile */}
                </div>
            </div>

        </div>
    )
}