import React from 'react';
import '../CSS/projectgrid.css';
import { Link } from "react-router-dom";
import WorkNavItem from "./work-nav-item.js"
import projects from "../../projects.js";


export default function ProjectGrid() {
    return (
            <div className="projectGrid">
                <WorkNavItem project={projects.banking} className="hero-image"/>
                <WorkNavItem project={projects.screen} className="hero-image"/>
                <WorkNavItem project={projects.scReview} className="hero-image"/>
                <WorkNavItem project={projects.business} className="hero-image"/>
                <WorkNavItem project={projects.pec} className="hero-image"/>
                {/* <WorkNavItem project={projects.ib} className="hero-image"/> */}
                {/* <WorkNavItem project={projects.rm} className="hero-image"/> */}
                <WorkNavItem project={projects.hints} className="hero-image"/>
                <WorkNavItem project={projects.acDf} className="hero-image"/>
                {/* <WorkNavItem project={projects.template} className="hero-image"/> */}
                {/* <WorkNavItem project={projects.well} className="hero-image"/> */}
                {/* <WorkNavItem project={projects.displace} className="hero-image"/> */}
                {/* <WorkNavItem project={projects.cn} className="hero-image"/> */}
            </div>
    )
}
