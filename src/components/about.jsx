import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div class="bg1" id="abt-sup">
                <div class='gradient'>
                    <section id="about" class="content-section" data-section="about">
                        <div class='inner-container'>
                            <div class='title'>About</div>
                            <div class='title-divider'></div>
                            <h1>Hello, I'm Anthony!</h1>
                            <h2>Data Scientist, Former Academic, Established Cat Person.</h2>
                            <div id="short-desc">
                                <p>I've always been a scientist of some form or another. Originally, I trained to be a research scientist, with a focus on how humans understand and process language. I started programming almost out of necessity, in order to build, run, and analyze the experiments I was desiging. Turns out I really enjoyed it, so I left the academic path, and have been working as a Data Scientist since 2016.</p>
                                <p>I'm currently available for consulting work on data analytics / data science projects, or just to share music recommendations and funny animal memes.</p>
                            </div>
                            <div id="contact-abt">
                            <div class='title'>Contact</div>
                            <div class='title-divider'></div>
                                <ul>
                                    <li>email: <a href="mailto:anthony.shook@gmail.com">anthony.shook@gmail.com</a></li>
                                    <li>linkedIn: <a href="https://www.linkedin.com/in/ajshook/">https://www.linkedin.com/in/ajshook/</a></li>
                                    <li>github: <a href="https://github.com/anthonyshook/">https://github.com/anthonyshook/</a></li></ul>
                            </div>
                            <p>This site was built in React using JSX and SCSS.</p> 
                            <p>It is also (and always will be) a work in progress :)</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}