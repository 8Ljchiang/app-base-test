import React, { Component } from 'react';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { FeedbackList } from '../units/feedback-list.component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteFeedbackItem } from '../../redux/feedback.actions';

export class PostListScene extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      sortByField: 'createdAt',
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
    const { postItems, actions } = this.props; // From redux
    const { sortByField, filterByType } = this.state;

    const feedbackItemTypes: string[] = postItems.map(item => item.issueType);
    const filterOptions: string[] = [...new Set(feedbackItemTypes)];
    const sortOptions = ['createdAt'];

    let resultItems = postItems;

    if (filterByType) {
      resultItems = resultItems.filter(item => item.issueType === filterByType);
    }

    if (sortByField) {
      resultItems = resultItems.sort((a, b) => a[sortByField] < b[sortByField] ? 1 : -1);
    }

    return (
      <BannerLayout title={'Posts List'}>
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
              {/* <FeedbackList feedbackItems={resultItems} actions={actions} /> */}
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

export const ConnectedPostListScene = connect(mapStateToProps, mapDispatchToProps)(PostListScene);
