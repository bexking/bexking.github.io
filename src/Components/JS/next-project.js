import React from 'react';  
import '../CSS/next-project.css';
import { Link } from "react-router-dom";

export default function NextProject() {
    return (
        <div>
            <div className='next-project-bar'>
                <div className='back'>
                    <Link to="/work" className="med-link">&#8592;&emsp;&nbsp;Previous</Link>
                </div>

                <div className='next'>
                    <Link to="/work" className="med-link">Next&emsp;&#8594;&nbsp;</Link>
                </div>
            </div>
        </div>
    )
}