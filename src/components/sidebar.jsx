import React, { Component } from 'react';

// import { HashLink as Link } from 'react-router-hash-link';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                <nav href="#navbar" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <div class="author-img" style={{ backgroundImage: 'url(images/purpleportrait.jfif)' }} />
                </div>
                {/* Needs Styling */}
                <div>
                    <h2>Anthony Shook, PhD</h2>
                    <h4>Data Scientist</h4>
                    <h4>Chicago, IL</h4>
                </div>
                <nav role='navigation'>
                    <ul id='nav'>
                        <li><a class='link' href="#about" data-nav-section="about">About</a></li>
                        <li><a class='link' href="#experience" data-nav-section="experience">Experience</a></li>
                        <li><a class='link' href="#skills" data-nav-section="skills">Skills</a></li>
                        <li><a class='link' href="#education" data-nav-section="education">Education / CV</a></li>
                        <li><a class='link' href="#projects" data-nav-section="projects">Projects</a></li>
                    </ul>
                </nav>
                <aside>
                    <ul id='icons'>
                        <li><a href="mailto:anthony.shook@gmail.com"><i className="icon-mail"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ajshook/" target="_blank" rel="noopener noreferrer"><i className="icon-social-linkedin-circular"></i></a></li>
                        <li><a href="https://github.com/anthonyshook" target="_blank" rel="noopener noreferrer"><i className="icon-social-github-circular"></i></a></li>
                    </ul>
                </aside>
                <div>
                    {/* needs styling */}
                    <hr></hr>
                    <div id="sidefoot">
                        Built with 
                        <a href="https://reactjs.org" target = "_blank" rel='noopener noreferrer'>
                            <img id="aligned" src='images/react-logo-light.png' width="24" height="24" alt = 'React Logo'></img>
                        </a>
                    </div>
                 </div>
            </div>
        )
    }
}