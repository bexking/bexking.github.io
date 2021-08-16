import React from 'react';
import '../CSS/projectgrid.css';
import { Link } from "react-router-dom";
import WorkNavItem from "./work-nav-item.js"
import projects from "../../projects.js";


export default function ProjectGrid() {
    return (
        <div>

            <div className="projectGrid">
                <WorkNavItem project={projects.ib} className="hero-image"/>
                <WorkNavItem project={projects.hints} className="hero-image"/>
                <WorkNavItem project={projects.acDf} className="hero-image"/>
                {/* <WorkNavItem project={projects.cn} className="hero-image"/> */}
            </div>

            <hr className="footer-hr"></hr>

        </div>

    )
}
