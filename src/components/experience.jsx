import React, { Component } from 'react'
import data from "./cv.json"; 

const employment = data.Employment;

export default class Experience extends Component {
    render() {
        return (
            <div class='bg1' id="exp-sup">
                <section id="experience" class="content-section" data-section="experience">
                    <div class='inner-container'>
                        <div class='title'>Experience</div>
                        <div class='title-divider'></div>
                        <div id="experience-container">
                            {employment.map(job => (
                                <div class='jobcards'>
                                    <div class='jobicon'><i className = {job.icon}></i></div>
                                    <div class='year'>
                                        <h5>{job.employer}</h5>
                                        <h4>{job.title}</h4>
                                        <h6>{job.start} - {job.end}</h6>
                                    </div>
                                    <div class='experience'>
                                        {job.desc}
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}