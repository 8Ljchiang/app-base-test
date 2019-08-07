import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Gateway3.css';

const gatewayPorts = [
  {
    title: 'loom',
    description: 'pairing coordinator',
    path: '/loom',
    tag: 'new',
    placeholder: false
  },
  {
    title: 'forge',
    description: 'social project builder',
    path: '/forge',
    tag: 'experimental',
    placeholder: false
  },
  {
    title: 'starfall',
    description: 'feedback',
    path: '/feedback',
    tag: 'new',
    placeholder: false
  },
  {
    title: '? ? ?',
    description: 'placeholder',
    path: '/',
    tag: 'unknown',
    placeholder: true
  },
]

export class Gateway3 extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showTileBorder: false,
      showLoadingTile: true,
      showTiles: true,
      showBackPlate: false,
      showFaceplate: false,
      showTag: false,
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showLoadingTile: true
    //   });
    // }, 1000)
    setTimeout(() => {
      this.setState({
        showTileBorder: true
      });
    }, 200);
    setTimeout(() => {
      this.setState({
        showBackPlate: true
      });
    }, 400);
    setTimeout(() => {
      this.setState({
        showFaceplate: true
      });
    }, 1200);
    setTimeout(() => {
      this.setState({
        showTag: true
      });
    }, 1280)
  }

  renderLoadingTile(port: any, delay: any) {
    return (
      <div className="gateway3-tile__loading-container" style={{ animationDelay: delay + 's' }}>
        { this.renderBorderTile(port, delay) }
      </div>
    );
  }

  renderTag(port: any, delay: any) {
    const { tag } = port;
    const { showTag } = this.state;
    const tagName = showTag ? tag : 'unknown';
    if (showTag) {
      return (
        <div style={{ height: '32px', animationDelay: delay + 's' }}>
          <p className="gateway3-tile__faceplate-tag">{tagName}</p>
        </div>
      );
    }
    return <div style={{ height: '32px' }}></div>
  }

  renderTile(port: any, index: any) {
    const { showTiles } = this.state;
    if (showTiles) {
      const portStyle = port.placeholder ? 'gateway3-tile' : 'gateway3-tile';
      const delay = 0;
      return (
        <div className={portStyle} key={index}>
          { this.renderLoadingTile(port, delay) }
          { this.renderTag(port, delay) }
        </div>
      );
    }
  }

  renderBorderTile(port: any, delay) {
    const { showTileBorder } = this.state;
    const tileBorderStyles = port.placeholder ? 'gateway3-tile-border' : 'gateway3-tile-border';
    if (showTileBorder) {
      return (
        <div className={tileBorderStyles} style={{ animationDelay: delay + 's' }}>
          { this.renderBackplate(port, delay) }
        </div>
      );
    }
    return null;
  }

  renderPort(port: any, index: any) {
    const { showTiles } = this.state;
    if (showTiles) {
      return this.renderTile(port, index);
    }
    return null;
  }

  renderPorts(ports: any[]) {
    const { showTiles } = this.state;
    if (showTiles) {
      return ports.map((port, index) => {
        return this.renderPort(port, index)
      });
    }
    return null;
  }

  renderFaceplate(port: any, delay: any) {
    const { showFaceplate } = this.state;
    if (showFaceplate) {
      const { title, description } = port;
      const updatedTitle = `>> ${title}`;
      const faceplateStyle = port.placeholder ? 'gateway3-tile__faceplate--placeholder' : 'gateway3-tile__faceplate';
      const titleStyle = port.placeholder ? 'gateway3-tile__faceplate-title--placeholder' : 'gateway3-tile__faceplate-title';
      const descStyle = port.placeholder ? 'gateway3-tile__faceplate-desc--placeholder' : 'gateway3-tile__faceplate-desc';
      return (
        <React.Fragment>
          <div className={faceplateStyle} style={{ animationDelay: delay + 's' }}>
            <h3 className={titleStyle}>{updatedTitle}</h3>
            <p className={descStyle}>{description}</p>
          </div>
        </React.Fragment>
      );
    }
    return null;
  }

  renderBackplate(port: any, delay: any) {
    const { showBackPlate } = this.state;
    if (showBackPlate) {
      const backplateStyle = port.placeholder ? 'gateway3-tile__backplate--placeholder' : 'gateway3-tile__backplate';
      return (
        <div className={backplateStyle} style={{ animationDelay: delay + 's' }}>
          { this.renderFaceplate(port, delay) }
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>{"{ interchange: gateway }"}</h1>
        { this.renderPorts(gatewayPorts) }
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
}
