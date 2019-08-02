import React, { Component } from 'react';
import { ViewPortLayout } from '../layouts/ViewPortLayout';
import { FeedbackForm } from '../modules/feedback/feedback-form.component';
import { BannerLayout } from '../layouts/BannerLayout';
import { Link } from 'react-router-dom';

export class DefaultErrorFallback extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showFeedback: false
    }
  }

  showFeedback() {
    this.setState({
      showFeedback: true
    });
  }

  render() {
    const { showFeedback } = this.state;
    return (
      <BannerLayout title={"Site fault: Something went wrong..."}>
        <p>Return <Link to={'/'}>Home</Link></p>
        { showFeedback ? (
          <FeedbackForm />
        ) : <button onClick={this.showFeedback.bind(this)}>Send feedback</button> }
      </BannerLayout>
    );
  }
}
