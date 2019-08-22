import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';
import { BannerLayout } from '../layouts/BannerLayout';

export class WelcomeScene extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BannerLayout title={'Welcome'}>
        <div style={styles.container}>
          <SimplePlaceholder title={'Announcements'}>
            <Link to={'/announcements'}>Announcements</Link>
          </SimplePlaceholder>
          <SimplePlaceholder title={'Account'}>
            <Link to={'/account'}>Account</Link>
          </SimplePlaceholder>
          <SimplePlaceholder title={'Roadmap'}>
            <Link to={'/roadmap'}>Roadmap</Link>
          </SimplePlaceholder>
          <SimplePlaceholder title={'Modules'}>
            <Link to={'/gateway'}>Modules</Link>
          </SimplePlaceholder>
          <SimplePlaceholder title={'Feedback'}>
            <Link to={'/feedback'}>Feedback</Link>
          </SimplePlaceholder>
        </div>
      </BannerLayout>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
  }
}
