import React, { Component } from 'react';
import data from "./cv.json"; 

const techSkills = data.techSkills;

export default class Skills extends Component {
    render() {
        return (
            <div class="bg2" id="prj-sup">
                <section id="skills" class="content-section" data-section="skills">
                    <div class='inner-container'>
                        <div class='title'>Skills</div>
                        <div class='title-divider'></div>
                        <div class='skill-container'>
                        {techSkills.map(ts => (
                            <div>
                            <div id='area'>{ ts.Area } </div>
                                <div class='skill-card-container'>
                                    {ts.SkillSet.map(ss => (
                                        <div class = 'skill-card'>
                                            {ss.Name}
                                        </div>
                                    ))} 
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