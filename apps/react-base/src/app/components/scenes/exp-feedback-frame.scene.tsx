import React, { Component } from 'react';

import './exp-feedback-frame.scene.css';

class PageFrame extends Component<any, any> {
  render() {
    return (
      <div className="frame-container">
        { this.props.children }
      </div>
    );
  }
}

class FeedbackSection extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showContainer: false,
      showHeader: false,
      showBody: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showContainer: true
      })
    }, 800);
    setTimeout(() => {
      this.setState({
        showHeader: true,

      });
    }, 1200);
    setTimeout(() => {
      this.setState({
        showBody: true
      });
    }, 1600);
  }

  renderContainer() {
    const { showHeader, showBody, showContainer } = this.state;
    if (showContainer) {
      return (
        <div className="meta-feedback-container">
          <div></div>
          <div className="feedback-container">
            { showHeader && <div className="feedback-section__header">Feedback Section</div> }
            { showBody &&  <div className="feedback-section__body">Other stuff</div> }
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return this.renderContainer();
  }
}

export class ExpFeedbackFrameScene extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const { isClicked } = this.state;
    const clnm = isClicked ? "page-container--raised" : "page-container";
    const metaContainer = isClicked ? "meta-page-container--reduced" : "meta-page-container";
    const backdrop = isClicked ? "frame-background frame-background--animated": "frame-background";
    return (
      <PageFrame>
        <div className={clnm}>
          Page Title
        </div>
         { isClicked && <FeedbackSection/> }
        <div className="frame-button" onClick={this.toggle}>
          +
        </div>
        <div className={backdrop}></div>
      </PageFrame>
    );
  }
}
