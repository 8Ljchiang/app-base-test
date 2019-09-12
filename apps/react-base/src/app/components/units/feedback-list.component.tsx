import React, { Component } from 'react';

const FeedbackListItem = (props) => {
  const { title, desc } = props.feedbackItem;
  return (
    <div style={styles.feedbackItemContainer}>
      {title} - {desc}
    </div>
  );
}

export class FeedbackList extends Component<any, any> {
  renderItems(items: any) {
    return items.map((feedbackItem, index) => {
      return <FeedbackListItem key={index} feedbackItem={feedbackItem} />;
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
    border: '1px dashed gray',
    marginBottom: '4px',
  }
}
