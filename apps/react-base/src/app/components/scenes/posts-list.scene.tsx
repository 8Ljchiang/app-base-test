import React, { Component } from 'react';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { connect } from 'react-redux';
import { PostsList } from '../units/posts-list.component';
import { Link } from 'react-router-dom';

export class PostsListScene extends Component<any, any> {
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
    const { posts } = this.props; // From redux
    const { sortByField, filterByType } = this.state;

    const itemTypes: string[] = posts.map(item => item.type);
    const filterOptions: string[] = [...new Set(itemTypes)];
    const sortOptions = ['createdAt'];

    let resultItems = posts;

    if (filterByType) {
      resultItems = resultItems.filter(item => item.type === filterByType);
    }

    if (sortByField) {
      resultItems = resultItems.sort((a, b) => a[sortByField] > b[sortByField] ? 1 : -1);
    }

    return (
      <BannerLayout title={'Posts List'}>
        <div style={styles.container}>
          <CenterLayout>
            <NarrowLayout>
              <Link to={'/pairing/community/post-create'}>Create Post</Link>
              Sort By:
              <select onChange={this.onSortByChange}>
                { sortOptions.map((option, index) => <option key={index} value={option}>{option}</option>) }
              </select>
              Select Type:
              <select onChange={this.onFilterByTypeChange}>
                <option value={''}>all</option>
                { filterOptions.map((option, index) => <option key={index} value={option}>{option}</option>) }
              </select>
              <PostsList posts={resultItems} />
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
    posts: state.posts.posts
  }
}

export const ConnectedPostsListScene = connect(mapStateToProps, null)(PostsListScene);
