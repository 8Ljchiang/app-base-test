import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';

export class FeedbackListScene extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const selectionOptions = [];
    const { feedbackItems } = this.props; // From redux

    return (
      <BannerLayout title={'Feedback List'}>
        <div style={styles.container}>
          <CenterLayout>
            <NarrowLayout>
              Select sort by dropdown
              Select Type Dropdown
              Feedback Item List
            </NarrowLayout>
          </CenterLayout>
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

// TODO: Connect to redux, add seed data to view test feedback items.
// TODO: Create the ability to upvote certain feedback.
// Consider making a mock service that will handle this thing.
