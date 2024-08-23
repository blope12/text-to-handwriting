import React from 'react'
import { Tooltip } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';

// import { Link } from 'react-router-dom'

import './Header.css'


function Header() {
    return (
        <div className="header">

            <div className="headerRight">
                <a href='https://github.com/blope12'  rel="blope12">
                    <Tooltip title="Visit My Github "  TransitionComponent={Zoom}>
                        <GitHubIcon />
                    </Tooltip>
                    
                </a>
            </div>
        </div>
    )
}

export default Header
