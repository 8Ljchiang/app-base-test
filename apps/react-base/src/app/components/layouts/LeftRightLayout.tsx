import React from 'react';

export const LeftRightLayout = (props) => {
  const { left, right } = props;
  const LeftComponent = left;
  const RightComponent = right;
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <LeftComponent/>
      </div>
      <div style={styles.right}>
        <RightComponent/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  left: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minWidth: '440px',
    width: '440px',
    background: 'rgb(210, 212, 214)',
  },
  right: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    background: 'rgb(34, 44, 56)',
  },
}
