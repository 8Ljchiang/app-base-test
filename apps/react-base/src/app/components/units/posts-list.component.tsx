import React, { Component } from 'react';

class PostItem extends Component<any, any> {
  render() {
    const { post } = this.props;
    return (
      <div style={styles.itemContainer}>
        <p>{post.title} - {post.author}</p>
        <p>{post.message}</p>
      </div>
    );
  }
}

export class PostsList extends Component<any, any> {
  renderPosts(posts: any) {
    return posts.map((post, index) => {
      return (<PostItem key={index} post={post} />);
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <div style={styles.listContainer}>
        { this.renderPosts(posts) }
      </div>
    )
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexFlow: 'column',
    overflow: 'auto',
  },
  itemContainer: {
    border: '1px dashed gray',
    marginBottom: '4px'
  }
}
