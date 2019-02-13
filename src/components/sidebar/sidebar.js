import React from "react";
import "../sidebar/sidebar.css";

function Sidebar() {
    return (

    <nav id="sidebar">
            <div className="sidebar-header">
                <h3 className="heading">EverGame</h3>
                <strong>EG</strong>
            </div>

            <ul className="list-unstyled components">
                <li>
                    <a href="/yourList">
                        <i className="fas fa-briefcase"></i>
                        Your List
                    </a>
                </li>
                <li>
                    <a href="/home">
                        <i className="fas fa-briefcase"></i>
                        Home
                    </a>
                </li>
                
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-home"></i>
                        Home
                    </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="google.com">Home 1</a>
                        </li>
                        <li>
                            <a href="google.com">Home 2</a>
                        </li>
                        <li>
                            <a href="google.com">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/home">
                        <i className="fas fa-briefcase"></i>
                        About
                    </a>
                    <a href="/game">
                        <i className="fas fa-briefcase"></i>
                        Game Test
                    </a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy"></i>
                        Games
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="google.com">Multiplayer</a>
                        </li>
                        <li>
                            <a href="google.com">Action</a>
                        </li>
                        <li>
                            <a href="google.com">RPG</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-image"></i>
                        Movies
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-question"></i>
                        Concerts
                    </a>
                </li>
                <li>
                    <a href="google.com">
                        <i className="fas fa-paper-plane"></i>
                        Contact
                    </a>
                </li>
            </ul>

            {/* <ul className="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                </li>
            </ul> */}
    </nav>
)};

export default Sidebar;