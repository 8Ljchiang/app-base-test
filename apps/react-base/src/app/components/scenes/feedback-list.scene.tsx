import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { FeedbackList } from '../units/feedback-list.component';
import { connect } from 'react-redux';

export class FeedbackListScene extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const selectionOptions = [];
    const filterOptions = [];
    const { feedbackItems } = this.props; // From redux

    return (
      <BannerLayout title={'Feedback List'}>
        <div style={styles.container}>
          <CenterLayout>
            <NarrowLayout>
              Select sort by dropdown
              Select Type Dropdown
              <FeedbackList feedbackItems={feedbackItems}/>
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

const mapStateToProps = (state) => {
  return {
    feedbackItems: state.feedback.feedbackItems
  }
}

export const ConnectedFeedbackListScene = connect(mapStateToProps, null)(FeedbackListScene);
// TODO: Connect to redux, add seed data to view test feedback items.
// TODO: Create the ability to upvote certain feedback.
// Consider making a mock service that will handle this thing.
