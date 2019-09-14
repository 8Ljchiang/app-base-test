import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './gateway2.component.css';

export class Gateway2 extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showTiles: true,
      showBackPlate: false,
      showFaceplate: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showBackPlate: true
      });
    }, 1600);
    setTimeout(() => {
      this.setState({
        showFaceplate: true
      });
    }, 2200);
  }

  renderTiles() {
    if (this.state.showTiles) {
      return (
        <div className="gateway-tile__container">
          <div className="gateway-tile gateway-tile__one gateway-tile--animated">
            {this.renderBackplate('test1')}
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" >> loom"}</h3>
              <p style={styles.portDescription}>Pairing coordinator</p>
            </div> */}
            {/* <p style={styles.tag}>new</p> */}
          </div>
          <div className="gateway-tile gateway-tile__two gateway-tile--animated">
          {this.renderBackplate('test2')}
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" >> forge"}</h3>
              <p style={styles.portDescription}>Social Build Connector</p>
            </div> */}
            {/* <p style={styles.tag}>experimental</p> */}
          </div>
          <div className="gateway-tile gateway-tile__three gateway-tile--animated">
          {this.renderBackplate('test3')}
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" >> starfall"}</h3>
              <p style={styles.portDescription}>Feedback</p>
            </div> */}
            {/* <p style={styles.tag}>new</p> */}
          </div>
          <div className="gateway-tile gateway-tile__four gateway-tile--animated">
          {this.renderBackplate('test4')}
            {/* <div style={styles.portContainer}>
              <h3 style={styles.portTitle}>{" Default"}</h3>
              <p style={styles.portDescription}>Pairing coordinator</p>
            </div> */}
            {/* <p style={styles.tag}>new</p> */}
          </div>
        </div>
      );
    }
    return null;
  }

  renderFaceplate(title: string) {
    if (this.state.showFaceplate) {
      return (<div className="tile-faceplate"><Link to={'/pairing/community/activities'}>{title}</Link></div>);
    }
    return null;
  }

  renderBackplate(title: string) {
    if (this.state.showBackPlate) {
      return <div className="tile-backplate">{this.renderFaceplate(title)}</div>;
    }
    return null;
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>{"{ interchange: gateway }"}</h1>
        {this.renderTiles()}
        {/* <div style={styles.metaContainer}>
          <div style={styles.unknownContainer}>
            <h3 style={styles.unknownProtTitle}>{" ? ? ? "}</h3>
            <p style={styles.unknownProtTitle}>placeholder</p>
          </div>
          <p style={styles.tag}>unknown</p>
        </div> */}
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
    background: 'rgb(210, 212, 214)',
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
