import { configure } from '@storybook/react';

import '../apps/react-base/src/app/app.css';

const req = require.context('../stories', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
