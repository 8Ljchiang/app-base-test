import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { CreateExerciseForm } from '../forms/create-exercise-form.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createExercise } from '../../redux/exercises.actions';

class CreateExerciseScene extends Component<any, any> {
  render() {
    const { actions } = this.props;
    return (
      <BannerLayout title={'Create Exercise'}>
        <CenterLayout>
          <NarrowLayout>
            <Link to={'/exercises'}>Back</Link>
            <CreateExerciseForm actions={actions}/>
          </NarrowLayout>
        </CenterLayout>
      </BannerLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createExercise
    }, dispatch)
  }
}

export const ConnectedCreateExerciseScene = connect(null, mapDispatchToProps)(CreateExerciseScene);
