import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div class='bg1' id='edu-sup'>
                <section id="education" class="content-section" data-section="education">
                    <div class='inner-container'>
                        <div class='title'>Education</div>
                        <div class='title-divider'></div>
                        <div id="education-container">
                            <div class='educard'>
                                <div class='info'>
                                    <div class='logo'>
                                        <img src = 'images/NU_seal2.png'></img>
                                        <div class='year'>2014</div>
                                    </div>
                                    PhD, Communication Sciences & Disorders
                                    Cognitive Science Speciality / Psycholinguistics
                                </div>
                                <div class='school'>
                                    <div class='school-name'>Northwestern University</div>
                                </div>
                            </div>
                            <div class='educard'>
                                <div class='info'>
                                    <div class='logo'>
                                        <img src = 'images/UR_seal.png'></img>
                                        <div class='year'>2006</div>
                                    </div>
                                    Bachelor of Arts, Brain & Cognitive Sciences
                                </div>
                                <div class='school'>
                                    <div class='school-name'>University of Rochester</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}