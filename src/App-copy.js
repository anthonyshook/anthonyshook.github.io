import React, { Component } from 'react';
import './App.css';
import './scss/main-page.scss';
import './scss/sidebar.scss';
import Sidebar from './components/sidebar';
import Experience from './components/experience';
import Education from './components/education';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div id='full-page'>
        <div class='nav-panel'>
          <Sidebar></Sidebar>
        </div>
        <div class="main-page">
          <About></About>
          <Experience></Experience>
          <Education></Education>
        </div>
      </div>
    );
  }
}

class NewAbout extends Component {
  render() {
    return(
      <div>
        <About></About>
      </div>
    )
  }
}

export default App;
