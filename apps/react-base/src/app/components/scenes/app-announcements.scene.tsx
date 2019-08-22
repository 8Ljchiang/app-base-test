import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';

export class AppAnnouncementsScene extends Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Link to={'/welcome'}>Home</Link>
        <SimplePlaceholder title={'Announcements'}>
          <p>News 1</p>
          <p>News 2</p>
          <p>News 3</p>
        </SimplePlaceholder>
      </React.Fragment>
    );
  }
}
