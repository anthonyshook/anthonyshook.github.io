import React from 'react';
import './App.css';
import './scss/main-page.scss';
import './scss/sidebar.scss';
import Sidebar from './components/sidebar';
import Experience from './components/experience';
import Education from './components/education';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';


function App() {
  return (
    <div id='full-page'>
      <div class='nav-panel'>
        <Sidebar></Sidebar>
      </div>
      <div class="main-page">
        <About></About>   
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
