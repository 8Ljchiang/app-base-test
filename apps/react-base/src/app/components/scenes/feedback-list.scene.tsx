import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { FeedbackList } from '../units/feedback-list.component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteFeedbackItem } from '../../redux/feedback.actions';

export class FeedbackListScene extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      sortByField: 'upvotes',
      filterByType: ''
    }

    this.onSortByChange = this.onSortByChange.bind(this);
    this.onFilterByTypeChange = this.onFilterByTypeChange.bind(this);
  }

  onSortByChange(event) {
    const { value } = event.target;
    this.setState({
      sortByField: value
    });
  }

  onFilterByTypeChange(event) {
    const { value } = event.target;
    this.setState({
      filterByType: value
    });
  }

  render() {
    const { feedbackItems, actions } = this.props; // From redux
    const { sortByField, filterByType } = this.state;

    const feedbackItemTypes: string[] = feedbackItems.map(item => item.issueType);
    const filterOptions: string[] = [...new Set(feedbackItemTypes)];
    const sortOptions = ['upvotes', 'createdAt'];

    let resultItems = feedbackItems;

    if (filterByType) {
      resultItems = resultItems.filter(item => item.issueType === filterByType);
    }

    if (sortByField) {
      resultItems = resultItems.sort((a, b) => a[sortByField] < b[sortByField] ? 1 : -1);
    }

    return (
      <BannerLayout title={'Feedback List'}>
        <div style={styles.container}>
          <CenterLayout>
            <NarrowLayout>
              Sort By:
              <select onChange={this.onSortByChange}>
                { sortOptions.map(option => <option value={option}>{option}</option>) }
              </select>
              Select Type:
              <select onChange={this.onFilterByTypeChange}>
                <option value={''}>all</option>
                { filterOptions.map(option => <option value={option}>{option}</option>) }
              </select>
              <FeedbackList feedbackItems={resultItems} actions={actions} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      upvoteFeedbackItem
    }, dispatch)
  };
}

export const ConnectedFeedbackListScene = connect(mapStateToProps, mapDispatchToProps)(FeedbackListScene);
// TODO: Connect to redux, add seed data to view test feedback items.
// TODO: Create the ability to upvote certain feedback.
// Consider making a mock service that will handle this thing.
