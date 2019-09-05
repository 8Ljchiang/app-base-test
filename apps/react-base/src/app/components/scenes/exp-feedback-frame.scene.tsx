import React, { Component } from 'react';
import { SiteFeedbackForm } from '../units/site-feedback-form.component';

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

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.actions.reset();
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
            { showHeader &&
              <div onClick={this.toggle} className="feedback-section__header">
                <p>Site Feedback Section</p>
                <p>X</p>
              </div>
            }
            { showBody &&
              <div className="feedback-section__body">
                <SiteFeedbackForm/>
              </div>
            }
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
    const actions = {
      reset: this.toggle
    }
    return (
      <PageFrame>
        <div className={clnm}>
          { isClicked && <div className="frame-tag">Alpha v0.1.11</div> }
          { this.props.children }
        </div>
        {/* <div className={clnm}>
          Page Title
        </div> */}
        { isClicked && <FeedbackSection actions={actions}/> }
        <div className="site-feedback-container">
          {/* <div className="action-container">
            Profile
          </div>
          <div className="action-container">
            Modules
          </div>
          <div className="action-container">
            Announcements
          </div>
          <div className="action-container">
            Roadmap
          </div>
          <div className="action-container">
            App Feedback
          </div> */}
          <div style={styles.siteFeedbackContainer} onClick={this.toggle}>
            Site Feedback
          </div>
        </div>
        <div className={backdrop}>
          {/* <div className="frame-tag"></div> */}
        </div>
      </PageFrame>
    );
  }
}

const styles = {
  siteFeedbackContainer: {
    background: 'pink',
    padding: '4px',
    border: '4px solid white',
    margin: '10px',
    minWidth: '30px'
  }
};
