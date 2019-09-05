import React, { Component } from 'react';

export class AppProjectPlan extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderPlan(show: boolean) {
    if (show) {
      return (
        <div style={styles.planContainer}>
          <h2>Project Initiation</h2>
          <p>Project Ideation and Charter Documentation</p>
          <p>Specification Identification</p>
          <p>Feature Research and Pre-Design</p>
          <p>Front End Research and Design</p>
          <p>Back End Research and Design</p>
          <p>Project Scope Eval and Roadmap Planning</p>
          <p>Project Release Planing and Meta Feature Design</p>
          <p>Phase 1 Scope Identification</p>
          <p>Advisory Team Selected</p>
          <p>Communication Plan Research Started</p>

          <h2>Project Implementation Start</h2>

          <p>Front End Implementation: Base</p>
          <p>Front End Implementation: Application Pages</p>
          <p>Front End Implementation: Feature Pages</p>
          <p>Front End Implementation: Meta Features</p>

          <p>UI/UX Pass</p>
          <p>UX Review</p>

          <p>Backend Implementation Start</p>

          <p>Backend Integration</p>

          <p>Phase 1: Internal Review</p>
          <p>Phase 1: Private Demo</p>
          <p>Phase 1: Deploy</p>
        </div>
      )
    }
    return null;
  }

  render() {
    const { isOpen } = this.state;
    const title = isOpen ? "hide" : "show";
    return (
      <div style={styles.container}>
        <div style={styles.buttonContainer} onClick={this.toggle}>plan: {title}</div>
        { this.renderPlan(isOpen) }
      </div>
    );
  }
}

const styles = {
  container: {
    border: '3px solid pink',
    // maxWidth: '200px',
    maxHeight: '400px',
    marginRight: '18px',
    boxShadow: '0 0 8px 4px rgb(30, 30, 30, 0.5)'
  },
  buttonContainer: {
    background: 'pink',
    padding: '4px',
    minHeight: '30px',
  },
  planContainer: {
    maxHeight: '360px',
    background: 'rgba(255, 255, 255, 0.6)',
    overflow: 'auto',
  }
}
