import React from 'react';
import { DevFutureFeature } from '../../units/DevFutureFeature';

export const LoomDashboard = (props) => {
  return (
    <div>
      Loom Dashboard
      <DevFutureFeature
        featureName={'loom description and welcome'}
        title={'placeholder'} />
      <DevFutureFeature
        featureName={'loom my stuff'}
        title={'placeholder'} />
      <DevFutureFeature
        featureName={'loom community'}
        title={'placeholder'} />
    </div>);
}
