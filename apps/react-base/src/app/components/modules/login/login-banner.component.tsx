import React from 'react';
import './login-banner.component.css';

export const LoginBanner = (props) => {
  return (
    <div className="login-banner login-banner--color1">
      <h1 className="login-banner__title">
        {"{ interchange }"}
      </h1>
      {/* <div className="widget-container--bottom">
        <div style={{ animationDelay: '3s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '2s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '1s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '0s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '1s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '2s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '3s' }} className="widget animated slideUp"></div>
      </div> */}
      <div className="widget-container--bottom">
        <div style={{ animationDelay: '1s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '2s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '0s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '3s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '0s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '2s' }} className="widget animated slideUp"></div>
        <div style={{ animationDelay: '1s' }} className="widget animated slideUp"></div>
      </div>
      <div className="widget-container">
        <div style={{ animationDelay: '1s' }} className="widget animated slideDown"></div>
        <div style={{ animationDelay: '0s' }} className="widget animated slideDown"></div>
        <div style={{ animationDelay: '2s' }} className="widget animated slideDown"></div>
        <div style={{ animationDelay: '3s' }} className="widget animated slideDown"></div>
        <div style={{ animationDelay: '2s' }} className="widget animated slideDown"></div>
        <div style={{ animationDelay: '0s' }} className="widget animated slideDown"></div>
        <div style={{ animationDelay: '1s' }} className="widget animated slideDown"></div>
      </div>
    </div>
  );
}
