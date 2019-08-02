import React, { Component } from 'react';

export class Gateway extends Component<any, any> {

  render() {
    return (
      <div style={styles.container}>
        <h1>{"{ interchange: gateway }"}</h1>
        <div style={styles.metaContainer}>
          <div style={styles.portContainer}>
            <h3 style={styles.portTitle}>{" >> codename: loom"}</h3>
            <p style={styles.portDescription}>Pairing coordinator</p>
          </div>
          <p style={styles.tag}>new</p>
        </div>
        <div style={styles.metaContainer}>
          <div style={styles.portContainer}>
            <h3 style={styles.portTitle}>{"{ port: forge (codename: ignite) }"}</h3>
            <p style={styles.portDescription}>Social Build Connector</p>
          </div>
          <p style={styles.tag}>experimental</p>
        </div>
        <div style={styles.metaContainer}>
          <div style={styles.portContainer}>
            <h3 style={styles.portTitle}>{" >> codename: starfall"}</h3>
            <p style={styles.portDescription}>Feedback</p>
          </div>
          <p style={styles.tag}>new</p>
        </div>
      </div>
    );
  }
}

const LockedPorts = () => {
  return (
    <>
      <div style={styles.metaContainer}>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{" >> codename: canvas "}</h3>
          <p style={styles.portDescription}>Ideation Space</p>
        </div>
        <p style={styles.tag}>locked</p>
      </div>
      <div style={styles.metaContainer}>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{" >> codename: cinema "}</h3>
          <p style={styles.portDescription}>Marketing, Videography, Business UX</p>
        </div>
        <p style={styles.tag}>locked</p>
      </div>
      <div style={styles.metaContainer}>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{" >> codename: press "}</h3>
          <p style={styles.portDescription}>Writing and copy</p>
        </div>
        <p style={styles.tag}>locked</p>
      </div>
      <div style={styles.metaContainer}>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{" >> codename: assembly line "}</h3>
          <p style={styles.portDescription}>Process mapping</p>
        </div>
        <p style={styles.tag}>locked</p>
      </div>
      <div style={styles.metaContainer}>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{" >> codename: oven "}</h3>
          <p style={styles.portDescription}>Personal Development, Training</p>
        </div>
        <p style={styles.tag}>locked</p>
      </div>
    </>
  )
}

const styles = {
  container: {
    height: '100%',
    // width: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  metaContainer:{
    display: 'flex',
    flexFlow: 'column',
    margin: '20px'
  },
  tag: {
    marginLeft: '8px',
    color: 'rgb(34, 44, 56)'
  },
  portContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px',
    boxShadow: '0 0 10px 5px rgb(150, 150, 150)',
    background: 'rgb(34, 44, 56)',
    borderRadius: '5px',
  },
  portTitle: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(52, 165, 235)'
  },
  portDescription: {
    color: 'white',
  }
}
