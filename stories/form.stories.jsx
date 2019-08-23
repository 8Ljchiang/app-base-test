import React from 'react';

import { storiesOf } from '@storybook/react';

import { FeedbackForm } from '../apps/react-base/src/app/components/modules/feedback/feedback-form.component';
import { LoginForm } from '../apps/react-base/src/app/components/modules/login/login-form.component';
import { SignupForm } from '../apps/react-base/src/app/components/modules/login/signup-form.component';

storiesOf('Forms', module)
  .add('Feedback Form', () => {
    return (
      <FeedbackForm/>
    );
  })
  .add('Login Form', () => {
    return (
      <LoginForm/>
    );
  })
  .add('Signup Form', () => {
    return (
      <SignupForm/>
    );
  });
