import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div class='bg2' id="exp-sup">
                <section id="experience" class="content-section" data-section="experience">
                    <div class='inner-container'>
                        <div class='title'>Experience</div>
                        <div class='title-divider'></div>
                        <div id="experience-container">
                            <div class='jobcards'>
                                <div class='jobicon'><i className="icon-lab2"></i></div>
                                <div class='year'>
                                    <h5>Jellyvision Labs, Inc.</h5>
                                    <h4>Lead Data Scientist</h4>
                                    <h6>Nov. 2018 - Present</h6>
                                </div>
                                <div class='experience'>
                                Manager of the Data Analytics team, which analyzes event-stream data from our core product, ALEX, and provides insights through dashboards and ad-hoc analyses to both customers and internal stakeholders; maintenence of Analytics infrastruture; Research and development of data-driven solutions, working closely with product teams.
                                </div>
                            </div>
                            <div class='jobcards'>
                                <div class='jobicon'><i className="icon-data"></i></div>
                                <div class='year'>
                                    <h5>RotoViz, LLC.</h5>
                                    <h4>VP of Data and Operations</h4>
                                    <h6>Jan. 2018 - Present</h6>
                                </div>
                                <div class='experience'>
                                Maintainence and Developement of Server Infrastructure for subscription based e-commerce / blogging website focused on Fantasy Sports analytics; Responsibilities include developing ETL pipelines for sports analytics data, maintaining website and data pipeline infrastructure, and developing Shiny-based web applications.    
                                </div>
                            </div>
                            <div class='jobcards'>
                                <div class='jobicon'><i className="icon-phone3"></i></div>
                                <div class='year'>
                                    <h5>Mattersight Corporation</h5>
                                    <h4>Senior Data Scientist</h4>
                                    <h6>Aug. 2016 - Oct. 2018</h6>
                                </div>
                                <div class='experience'>
                                Technical lead for development and implementation of predictive models for call centers to optimize key performance metrics such as talk time, customer satisfaction, and sales rates using various Machine Learning techniques; Analysis of unstructured linguistic data using unsupervised learning and clustering techniques.
                                </div>
                            </div>
                            <div class='jobcards'>
                                <div class='jobicon'><i className="icon-bar-graph-2"></i></div>
                                <div class='year'>
                                    <h5>Mbira Technologies</h5>
                                    <h4>Data Analyst</h4>
                                    <h6>March 2015 - July 2016</h6>
                                </div>
                                <div class='experience'>
                                Responsibilities: A/B and multivariant testing; data management and reporting; development of statistical models for predicting customer behavior and monitoring key performance metrics on large and varied data; communication of statistical findings to marketing, business, and project management.
                                </div>
                            </div>
                            <div class='jobcards'>
                                <div class='jobicon'><i className="icon-study"></i></div>
                                <div class='year'>
                                    <h5>Northwestern University</h5>
                                    <h4>Visiting Assistant Professor</h4>
                                    <h6>Sept. 2014 - Dec. 2015</h6>
                                </div>
                                <div class='experience'>
                                Professor in Communication Sciences and Disorders at Northwestern University. Responsibilities included teaching undergraduate and graduate level college courses, serving on academic and departmental committees at the University.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}