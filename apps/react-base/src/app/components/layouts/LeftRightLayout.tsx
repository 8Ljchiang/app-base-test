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
    // zIndex: 1,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minWidth: '30%',
    width: '30%',
    background: 'rgb(210, 212, 214)',
    // boxShadow: '0 0 6px 4px rgb(80, 80, 80)'
  },
  right: {
    display: 'flex',
    // flexFlow: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    // background: 'rgb(34, 44, 56)',
  },
}
