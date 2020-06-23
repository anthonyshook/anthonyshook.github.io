import React, { Component } from 'react';
import data from "./cv.json"; 

const articles = data.PeerReviewedArticles;
const eduData  = data.Education;
const confData = data.confPresentations;

export default class Education extends Component {
    render() {
        return (
            <div class='bg1' id='edu-sup'>
                <section id="education" class="content-section" data-section="education">
                    <div class='inner-container'>
                        <div class='title'>Education</div>
                        <div class='title-divider'></div>
                        <div id="education-container">
                            {eduData.map(d => (
                            <div class='educard'>
                                <div class='info'>
                                    <div class='logo'>
                                        <img src = {d.logopath} alt = 'University Logo'></img>
                                        <div class='year'>{d.gradYear}</div>
                                    </div>
                                    <h4>{d.degree}</h4>
                                    <h3>{d.dept}</h3>
                                    <h5>Focus: {d.focus}</h5>
                                </div>
                                <div class='school'>
                                    <div class='school-name'>{d.school}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                <div id='cv-link'>
                    <div class='title'>Publications and Presentations</div>
                    <div class='title-divider'></div>
                    <h3>For a complete CV, <a href='docs/A_Shook_CV.pdf'>click here!</a></h3>
                    <h3>Peer Reviewed Articles:</h3>
                    {articles.map(s => (
                        <ul><li>{s.authors} ({s.year}). {s.title} <i>{ s.journal }. </i>
                            <a href={ "https://doi.org/" + s.doi } target= "_blank" rel="noopener noreferrer">{s.doi}</a>
                        </li></ul>)
                    )}
                    <h3>Select Conference Presentations:</h3>
                    {confData.map(c => (
                        <ul>
                            <li>
                                {c.title} ({c.when}). {c.location}. <i>{c.authors}</i>
                            </li>
                        </ul>
                    ))}
                </div>
                </section>
            </div>
        )
    }
}