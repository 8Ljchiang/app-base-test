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
        </SimplePlaceholder>
      </React.Fragment>
    );
  }
}
