import React, { Component } from 'react';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { bindActionCreators } from 'redux';
import { createPost } from '../../redux/posts.actions';
import { connect } from 'react-redux';
import { CreatePostForm } from '../forms/create-post-form.component';
import { Link } from 'react-router-dom';

class CreatePostScene extends Component<any, any> {
  render() {
    const { actions } = this.props;
    return (
      <BannerLayout title={'Create Post'}>
        <CenterLayout>
          <NarrowLayout>
            <Link to={'/pairing/community/posts'}>Back</Link>
            <CreatePostForm actions={actions}/>
          </NarrowLayout>
        </CenterLayout>
      </BannerLayout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createPost
    }, dispatch)
  }
}

export const ConnectedCreatePostScene = connect(null, mapDispatchToProps)(CreatePostScene);
