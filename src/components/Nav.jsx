import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav (){
    return (
        <>
            <div className="nav-bar">
            <img className="logo" src="https://i.imgur.com/0i6SfgA.png"></img>
            <nav className="nav">
                <ul>
                    <a>
                        <Link to="/">Home</Link>
                    </a>
                    <a>
                        <Link to="/features">Features</Link>
                    </a>
                    <a>
                        <Link to="/demo">Demo</Link>
                    </a>
                    <a>
                        <Link to="/team">Team</Link>
                    </a>
                    <a href="https://github.com/oslabs-beta/Brizo">
                        <img className="git-logo" src="https://cdn.discordapp.com/attachments/1116763449654005853/1127072822515212379/github-mark-white-60d03f0f.png"></img>
                    </a>
                    <a href="https://www.linkedin.com/company/brizocs/">
                        <img className="git-logo" src="https://cdn.discordapp.com/attachments/1116763449654005853/1127075181668597821/PngItem_1342155.png"></img>
                    </a>
                </ul>
            </nav>
            </div>
            <Outlet />
        </>
    );
}