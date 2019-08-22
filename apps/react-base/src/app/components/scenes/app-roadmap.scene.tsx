import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';
import { Timeline } from '../units/timeline.component';
import { Event } from '../units/timeline-event.component';

export class AppRoadmapScene extends Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Link to={'/welcome'}>Home</Link>
        <SimplePlaceholder title={'Roadmap'}>
          <Timeline>
            <Event interval={"2019 Q3"} title={"Community Activities"} subtitle={"Ipsum"}>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </Event>
            <Event interval={"2020 Q2"} title={"Activity Sessions"} subtitle={"Ipsum"}>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </Event>
            <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </Event>
          </Timeline>
        </SimplePlaceholder>
      </React.Fragment>
    );
  }
}
