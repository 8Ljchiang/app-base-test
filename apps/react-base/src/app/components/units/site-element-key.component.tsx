import React, { Component } from 'react';

export class SiteElementKey extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderPlan(show: boolean) {
    if (show) {
      return (
        <div style={styles.planContainer}>
          <p>* [Blue] elements represent application elements</p>
          <p>* [Pink] elements represent dev elements</p>
          <p>* Elements with a [gray dashed border] represent work-in-progress feature elements</p>
        </div>
      )
    }
    return null;
  }

  render() {
    const { isOpen } = this.state;
    const title = isOpen ? "hide" : "show";
    return (
      <div style={styles.container}>
        <div style={styles.buttonContainer} onClick={this.toggle}>keys: {title}</div>
        { this.renderPlan(isOpen) }
      </div>
    );
  }
}

const styles = {
  container: {
    border: '3px solid pink',
    maxWidth: '300px',
    maxHeight: '400px',
    marginRight: '18px',
    boxShadow: '0 0 8px 4px rgb(30, 30, 30, 0.5)'
  },
  buttonContainer: {
    background: 'pink',
    padding: '4px',
    minHeight: '30px',
  },
  planContainer: {
    maxHeight: '360px',
    background: 'rgba(255, 255, 255, 0.6)',
    overflow: 'auto',
  }
}
