import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    let projectsURL = "http://localhost:8888/wp-json/wp/v2/projects"
    fetch(projectsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects: response
      })
    })
  }
  render() {
    let projects = this.state.projects.map((project, index) => {
      return (
      <div key={index}>
        <img src={project.better_featured_image.media_details.sizes.medium.source_url}
          alt={project.better_featured_image.alt_text} />
          <p><strong>Title:</strong> {project.title.rendered} </p>
      </div>
      )
    })
  return (
    <div className="App">
      <h1>Projects</h1>
      {projects}
    </div>
  );
  }
}

export default App;
