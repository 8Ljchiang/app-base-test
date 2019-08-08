import React, { Component } from 'react';
import './login-banner.component.css';

export class LoginBanner extends Component<any, any> {
  renderBox(animationDelay, animationName, isHighlighted, index) {
    const styles = { animationDelay };
    if (isHighlighted) {
      styles['border'] = '2px solid palevioletred';
    }
    return (
      <div key={index} style={styles} className={animationName}></div>
    )
  }

  renderBoxSet(animationDelays, styleName, animationName, highlightIndex?: number) {
    return (
      <div className={styleName}>
        { animationDelays.map((ad, index) => {
          const isHighlighted = highlightIndex === index;
          return this.renderBox(ad, animationName, isHighlighted, index);
        }) }
      </div>
    );
  }

  renderSets( topDelays, bottomDelays, isTop, highlightedIndex) {
    return (
      <>
        { isTop ? this.renderBoxSet(bottomDelays, "widget-container--bottom", "widget animated slideUp", highlightedIndex) : this.renderBoxSet(bottomDelays, "widget-container--bottom", "widget animated slideUp") }
        { isTop ? this.renderBoxSet(topDelays, "widget-container", "widget animated slideDown") : this.renderBoxSet(topDelays, "widget-container", "widget animated slideDown", highlightedIndex)}
      </>
    );
  }

  render() {
    const bottomDelays = ['1s', '2s', '0s', '3s', '0s', '2s', '1s'];
    const topDelays = ['1s', '0s', '2s', '3s', '2s', '0s', '1s'];
    // const isTop = Math.floor(Math.random()) > 0.5;
    const topIndex = Math.floor(Math.random() * topDelays.length);
    const bottomIndex = Math.floor(Math.random() * bottomDelays.length);
    return (
      <div className="login-banner login-banner--color1">
        <h1 className="login-banner__title">
          {"Interchange"}
        </h1>
        {/* { this.renderSets(topDelays, bottomDelays, isTop, index) } */}
        { this.renderBoxSet(bottomDelays, "widget-container--bottom", "widget animated slideUp", 6) }
        { this.renderBoxSet(topDelays, "widget-container", "widget animated slideDown", 0)}
        {/* <div className="widget-container--bottom">
          <div style={{ animationDelay: '3s' }} className="widget animated slideUp"></div>
          <div style={{ animationDelay: '2s' }} className="widget animated slideUp"></div>
          <div style={{ animationDelay: '1s' }} className="widget animated slideUp"></div>
          <div style={{ animationDelay: '0s' }} className="widget animated slideUp"></div>
          <div style={{ animationDelay: '1s' }} className="widget animated slideUp"></div>
          <div style={{ animationDelay: '2s' }} className="widget animated slideUp"></div>
          <div style={{ animationDelay: '3s' }} className="widget animated slideUp"></div>
        </div> */}

        {/* <div className="widget-container">
          <div style={{ animationDelay: '1s' }} className="widget animated slideDown"></div>
          <div style={{ animationDelay: '0s' }} className="widget animated slideDown"></div>
          <div style={{ animationDelay: '2s' }} className="widget animated slideDown"></div>
          <div style={{ animationDelay: '3s' }} className="widget animated slideDown"></div>
          <div style={{ animationDelay: '2s' }} className="widget animated slideDown"></div>
          <div style={{ animationDelay: '0s' }} className="widget animated slideDown"></div>
          <div style={{ animationDelay: '1s' }} className="widget animated slideDown"></div>
        </div> */}
      </div>
    );
  }
}
