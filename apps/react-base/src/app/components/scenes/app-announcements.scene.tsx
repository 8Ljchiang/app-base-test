import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';

export class AppAnnouncementsScene extends Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Link to={'/welcome'}>Home</Link>
        <SimplePlaceholder title={'Announcements'}>
          <p>* All site elements with gray dashed lines are work-in-progress placeholders</p>
          <p>* Pink elements represent dev elements</p>
          <p>* Light Blue elements represent platform elements</p>
          <p>News 1</p>
          <p>News 2</p>
          <p>News 3</p>

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
        </SimplePlaceholder>
      </React.Fragment>
    );
  }
}
