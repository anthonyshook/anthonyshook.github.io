import React, { Component } from 'react';
import data from "./cv.json"; 

const projects = data.Projects;

export default class Projects extends Component {
    render() {
        return (
            <div class="bg2" id="prj-sup">
                <section id="projects" class="content-section" data-section="projects">
                    <div class='inner-container'>
                        <div class='title'>Projects</div>
                        <div class='title-divider'></div>
                        <div id="projects-container">
                            {projects.map(project => (
                                <div class='project-card'>
                                    <div class="project-title">{project.Name}</div>
                                    <div class="project-desc">{project.Desc}</div>
                                    {project.Skills.map(skill => (
                                        <div class="project-skills"><p>{skill}</p></div>
                                    ))}
                                    <div class="project-link"><a href={project.Link}>View Project</a></div>
                                </div>
                            ))}
                        </div>
                        More to come...
                    </div>
                </section>
            </div>
        )
    }
}