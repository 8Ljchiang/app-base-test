import React, { Component } from 'react';
import './gateway2.component.css';

export class Gateway2 extends Component<any, any> {
  render() {
    return (
      <div style={styles.container}>
        <h1>{"{ interchange: gateway }"}</h1>
        <div style={styles.tileContainer} className="gateway-tile__container">
          <div style={{ position: 'relative', top: '140px' }} className="gateway-tile gateway-tile--animated slideLeft">
            test1
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" >> loom"}</h3>
              <p style={styles.portDescription}>Pairing coordinator</p>
            </div> */}
            {/* <p style={styles.tag}>new</p> */}
          </div>
          <div style={{ position: 'relative' }} className="gateway-tile">
            test2
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" >> forge"}</h3>
              <p style={styles.portDescription}>Social Build Connector</p>
            </div> */}
            {/* <p style={styles.tag}>experimental</p> */}
          </div>
          <div style={{ position: 'relative', top: '-140px' }} className="gateway-tile gateway-tile--animated slideRight">
            test3
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" >> starfall"}</h3>
              <p style={styles.portDescription}>Feedback</p>
            </div> */}
            {/* <p style={styles.tag}>new</p> */}
          </div>
          <div style={{ position: 'relative', top: '-280px'}} className="gateway-tile gateway-tile--animated slideDown">
            test4
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" Default"}</h3>
              <p style={styles.portDescription}>Pairing coordinator</p>
            </div> */}
            {/* <p style={styles.tag}>new</p> */}
          </div>
          {/* <div style={styles.metaContainer}>
            <div style={styles.unknownContainer}>
              <h3 style={styles.unknownProtTitle}>{" ? ? ? "}</h3>
              <p style={styles.unknownProtTitle}>placeholder</p>
            </div>
            <p style={styles.tag}>unknown</p>
          </div> */}
        </div>
      </div>
    );
  }
}

const styles = {
  tileContainer: {
    border: '1px solid black',
    display: 'flex', 
    flexFlow: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%', 
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
    background: 'rgb(210, 212, 214)',
  },
  metaContainer:{
    border: '1px solid black',
    display: 'flex',
    flexFlow: 'column',
    width: '140px',
    maxWidth: '140px',
    minWidth: '140px',
    height: '140px',
    minHeight: '140px',
    maxHeight: '140px',
  },
  unknownContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px',
    boxShadow: '0 0 10px 5px rgb(150, 150, 150)',
    background: 'rgb(120, 120, 120)',
    border: '3px dashed rgb(80, 80, 80)',
    color: 'gray',
    borderRadius: '5px',
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
  unknownProtTitle: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightgray'
  },
  portDescription: {
    color: 'white',
  }
}
