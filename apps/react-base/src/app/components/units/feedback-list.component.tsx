import React, { Component } from 'react';

class FeedbackListItem extends Component<any, any> {
  upvote() {
    const { upvoteFeedbackItem } = this.props.actions;
    const { id } = this.props.feedbackItem;
    upvoteFeedbackItem({ id })
  }

  render() {
    const { title, desc, upvotes } = this.props.feedbackItem;
    return (
      <div style={styles.feedbackItemContainer}>
        <p>{title} - {desc} - likes: {upvotes}</p>
        <button onClick={this.upvote.bind(this)}> Upvote </button>
      </div>
    );
  }
}

export class FeedbackList extends Component<any, any> {
  renderItems(items: any) {
    const { actions } = this.props;
    return items.map((feedbackItem, index) => {
      return <FeedbackListItem key={index} feedbackItem={feedbackItem} actions={actions}/>;
    });
  }

  render() {
    const { feedbackItems } = this.props;
    return (
      <div style={styles.listContainer}>
        {this.renderItems(feedbackItems)}
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  feedbackItemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px dashed gray',
    marginBottom: '4px',
  }
}
