import React from 'react';

import { storiesOf } from '@storybook/react';

import { SimplePlaceholder } from '../apps/react-base/src/app/components/units/SimplePlaceholder';

storiesOf('Simple Placeholder', module)
  .add('default', () => {
    return (
      <SimplePlaceholder title={'Simple placeholder'}/>
    );
  });
