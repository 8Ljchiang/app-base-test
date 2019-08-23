import React from 'react';

import { storiesOf } from '@storybook/react';

import { Timeline } from '../apps/react-base/src/app/components/units/timeline.component';
import { Event } from '../apps/react-base/src/app/components/units/timeline-event.component';

const timelineEventProps = {
  title: 'title',
  subtitle: 'subtitle',
  interval: '2020-2012',
}

storiesOf('Timeline', module)
  .add('default', () => {
    return (
      <Timeline>
        <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
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
    );
  });
