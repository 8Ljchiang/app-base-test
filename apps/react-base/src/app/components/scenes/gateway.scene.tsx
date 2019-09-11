import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../units/SimplePlaceholder';
import { NarrowLayout } from '../layouts/narrow.layout';
import { CenterLayout } from '../layouts/center.layout';

const gatewayPorts = [
  {
    title: 'port: pairing',
    description: 'loom - pairing coordinator',
    path: '/loom',
    tag: 'new',
    placeholder: false,
    // backgroundColor: '#49aed6',
    // backgroundColor: '#6578d6',
    // backgroundColor: '#6485d1',
    // backgroundColor: 'rgb(69, 165, 255)',
  },
  {
    title: 'port: collab',
    description: 'ignite - social collaboration',
    path: '/forge',
    tag: 'experimental',
    placeholder: false,
    // backgroundColor: 'rgb(69, 165, 255)',
    // backgroundColor: '#db6ed0',
  },
  {
    title: '? ? ?',
    description: 'placeholder-module',
    path: '',
    tag: 'unknown',
    placeholder: true,
    // backgroundColor: 'rgb(69, 165, 255)',
    // backgroundColor: '#c8d973',
  },
]

export class GatewayScene extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  renderPort(port, index) {
    return (
      <div key={index}>
        <SimplePlaceholder style={{ background: port.backgroundColor }}>
          {/* <div style={{ background: 'lightgray', boxShadow: '0 0 12px 2px rgba(50, 50, 50, 0.6)', padding: '4px', borderRadius: '2px' }}>
          </div> */}
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
        <CenterLayout>
          <NarrowLayout>
            { this.renderList() }
          </NarrowLayout>
        </CenterLayout>
      </React.Fragment>
    );
  }
}
