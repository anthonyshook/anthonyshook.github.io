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
                        {techSkills.map(ts => (
                            <div>
                                <h2>{ ts.Area } </h2>
                                {ts.SkillSet.map(ss => (
                                    <div>
                                        {ss.Name}{(ss.Rating > 0) ? ' -- ' + ss.Rating : null}
                                    </div>
                                ))} 
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}