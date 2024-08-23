import React from 'react'
import { ImPacman } from "react-icons/im";
import './Info.css'
import image from '../../media/handwr.png'

function Info() {
    return (
        <div className="info">
            <div className="info_about">
                <p>
                    <ImPacman className="penIcon"/>
                        you can use this app for convert you text
                    
                    <ImPacman className="penIcon"/>
                </p>
            </div>
            <div className="info_image">
                <img src={image} alt="pen" />
            </div>
        </div>
    )
}

export default Info
