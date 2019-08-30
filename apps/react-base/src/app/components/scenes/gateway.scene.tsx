import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';

const gatewayPorts = [
  {
    title: 'port: pairing',
    description: 'loom - pairing coordinator',
    path: '/loom',
    tag: 'new',
    placeholder: false
  },
  {
    title: 'port: collab',
    description: 'ignite - social collaboration',
    path: '/forge',
    tag: 'experimental',
    placeholder: false
  },
  {
    title: '? ? ?',
    description: '*module-name*',
    path: '',
    tag: '*module-tag*',
    placeholder: true
  },
]

export class GatewayScene extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  renderPort(port, index) {
    return (
      <div key={index}>
        <SimplePlaceholder>
          { port.path ? <Link to={port.path}>{port.title}</Link> : <p>{port.title}</p> }
          <p>{port.description}</p>
          <p>{port.tag}</p>
        </SimplePlaceholder>
      </div>
    );
  }

  renderList() {
    return gatewayPorts.map((port, index) => {
      return this.renderPort(port, index);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Link to={'/welcome'}>Return to Welcome</Link>
        { this.renderList() }
      </React.Fragment>
    );
  }
}
