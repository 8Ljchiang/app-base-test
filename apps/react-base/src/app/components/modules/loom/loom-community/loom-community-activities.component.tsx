import React from 'react';

export const LoomCommunityActivities = (props) => {
  return (
    <div style={styles.container}>
      <h1>{"{ loom: community/activities }"}</h1>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
}
