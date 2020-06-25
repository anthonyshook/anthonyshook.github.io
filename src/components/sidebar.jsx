import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="mainNav">
                <nav href="#navbar" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <div class="author-img" style={{ backgroundImage: 'url(images/purpleportrait.jfif)' }} /></div>
                {/* Needs Styling */}
                <div>
                    <div id='selfName'>
                        <h2>Anthony Shook, PhD</h2>
                    </div>
                    <div id='selfTitle'>
                        <h4>Data Scientist</h4>
                        <h4>Chicago, IL</h4>
                    </div>
                </div>
                <nav role='navigation' class='menu'>
                    <ul id='nav'>
                        <li><a class='link' href="#about" data-nav-section="about">About</a></li>
                        <li><a class='link' href="#experience" data-nav-section="experience">Experience</a></li>
                        <li><a class='link' href="#skills" data-nav-section="skills">Skills</a></li>
                        <li><a class='link' href="#education" data-nav-section="education">Education / CV</a></li>
                        <li><a class='link' href="#projects" data-nav-section="projects">Projects / Work</a></li>
                    </ul>
                </nav>
                <aside>
                    <ul id='icons'>
                        <li><a href="mailto:anthony.shook@gmail.com"><i class="fas fa-envelope"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ajshook/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/anthonyshook" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
                    </ul>
                </aside>
                <div>
                    {/* needs styling */}
                    <div id="sidefoot">
                        Built in <a href="https://reactjs.org" target = "_blank" rel='noopener noreferrer'><i class="fab fa-react"></i>
                        </a>
                    </div>
                 </div>
            </div>
        )
    }
}