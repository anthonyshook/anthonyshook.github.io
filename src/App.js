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
import * as themes from './themes';

const lightTheme = themes.light_theme;
const darkTheme = themes.dark_theme;

const applyTheme = (nextTheme, cb) => {
  const theme = nextTheme === "Light" ? lightTheme : darkTheme;
  Object.keys(theme).forEach(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};

const App = () => {
  const [currentTheme, setTheme] = React.useState("Light");

  const onClick = () => {
    const nextTheme = currentTheme === "Light" ? "Dark" : "Light";
    setTheme(nextTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
  };

//function App() {
    return (
    <div id='full-page'>
      <div class='nav-panel'>
        <Sidebar></Sidebar>
        <p id={currentTheme}>{currentTheme}
          <button class={currentTheme} onClick={onClick}><i class="fas fa-dot-circle"></i></button>
        </p>
      </div>
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"></input>
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <div class="mobileHeader"><div id='MyName'>Anthony Shook, Ph.D</div></div>
      <div class="sidebarMenu">
          <ul class='sidebarMenuInner'>
              <li><a class='link' href="#about" data-nav-section="about">About</a></li>
              <li><a class='link' href="#experience" data-nav-section="experience">Experience</a></li>
              <li><a class='link' href="#skills" data-nav-section="skills">Skills</a></li>
              <li><a class='link' href="#education" data-nav-section="education">Education / CV</a></li>
              <li><a class='link' href="#projects" data-nav-section="projects">Projects / Work</a></li>
          </ul>
          <p id={currentTheme}>{currentTheme}
            <button class={currentTheme} onClick={onClick}><i class="fas fa-dot-circle"></i></button>
          </p>
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
