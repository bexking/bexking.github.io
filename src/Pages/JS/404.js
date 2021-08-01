import React from 'react'
import '../CSS/404.css';
import SeeMore from "../../Components/JS/see-more.js";
import ElleWoods from '../../Assets/ellewoods.JPG';

export default function NotFoundMsg() {
    return (
        <div id="notfound-page">
            <div className="content404">
                <div className="text404">
                    <h1 className="notfoundh1">Hmm...</h1>
                    <h2 className="notfoundh2">We couldn't find that page!</h2>
                    <h3 className="notfoundh3">Scroll down a bit further to see some others.</h3>
                </div>
                <img id="elle" src={ElleWoods} alt="Reese Witherspoon as Elle Woods in Legally Blonde looking annoyed with Apple Clamshell Laptop"></img>
            </div>
            <SeeMore project1={"ib"} project2={"hints"} />
        </div>
        
    )
}