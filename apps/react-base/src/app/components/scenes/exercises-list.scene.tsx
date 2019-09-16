import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppStore } from '../../core/interfaces/IAppStore';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { BannerLayout } from '../layouts/BannerLayout';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class ExerciseItem extends Component<any, any> {
  render() {
    const { title } = this.props.exercise;
    const { completeExercise } = this.props.actions;
    return (
      <div style={styles.itemContainer}>
        <p>{title}</p>
        <button onClick={completeExercise}>Complete</button>
      </div>
    );
  }
}


class ExercisesListScene extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'createdAt',
      filterBy: ''
    }

    this.onChangeSortBy = this.onChangeSortBy.bind(this);
    this.onChangeFilterBy = this.onChangeFilterBy.bind(this);
  }

  onChangeSortBy(event) {
    const value = event.target.value;
    this.patchState('sortBy', value);
  }

  onChangeFilterBy(event) {
    const value = event.target.value;
    this.patchState('filterBy', value);
  }

  patchState(key, value) {
    this.setState({
      [key]: value
    });
  }

  renderExercises(exercises: any[]) {
    return exercises.map((exercise, index) => {
      return <ExerciseItem key={index} exercise={exercise} />
    });
  }

  processItems(items: any[]) {
    const { filterBy, sortBy } = this.state;
    let resultItems = items;

    if (filterBy) {
      resultItems =  resultItems.filter((item) => item.topic === filterBy);
    }

    if (sortBy) {
      resultItems = resultItems.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    }

    return resultItems;
  }

  render() {
    const { exerciseItems } = this.props;
    const itemTypes: string[] = exerciseItems.map(item => item.topic);
    const filterOptions: string[] = [...new Set(itemTypes)];
    const sortOptions = ['createdAt'];
    const resultItems = this.processItems(exerciseItems);

    return (
      <BannerLayout title={"Exercises"}>
        <CenterLayout>
          <NarrowLayout>
            <Link to={'/create-exercise'}>Create Exercise</Link>
            <div style={styles.listContainer}>
              Sort By:
              <select onChange={this.onChangeSortBy}>
                { sortOptions.map((option, index) => <option key={index} value={option}>{option}</option>) }
              </select>
              Select Type:
              <select onChange={this.onChangeFilterBy}>
                <option value={''}>all</option>
                { filterOptions.map((option, index)=> <option key={index} value={option}>{option}</option>) }
              </select>
              { this.renderExercises(resultItems) }
            </div>
          </NarrowLayout>
        </CenterLayout>
      </BannerLayout>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px dashed gray',
    padding: '4px',
    marginBottom: '4px'
  }
}

const mapStateToProps = (state: IAppStore) => {
  return {
    exerciseItems: state.exercises.exercises
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      // TODO: Create Dispatch Action for Completing Exercise
    }, dispatch)
  }
}

export const ConnectedExercisesListScene = connect(mapStateToProps, mapDispatchToProps)(ExercisesListScene);
