import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CreateActivityForm } from '../../../forms/create-activity-form.component';

export class LoomCommunityCreatePairing extends Component<any, any> {

  render() {
    return (
      <>
        <p>Loom Community Create Pairing Activity Page: <Link to={'/loom/community/dashboard'}>Return to Loom Community Dashboard</Link></p>
        <div style={styles.container}>
          <div style={styles.containerColumn}>
            <h2>Create Pairing Activity</h2>
            <CreateActivityForm/>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    // height: '100%',

  },
  containerColumn: {
    display: 'flex',
    flex: 1,
    flexFlow: 'column',
    width: '50%',
    border: '2px gray dashed',
    margin: '20px',
    padding: '12px',
    overflow: 'auto',
    maxHeight: '80%',
    // height: '100%',
  },
  sectionContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  linkStyle: {
    color: 'black',
  }
}
