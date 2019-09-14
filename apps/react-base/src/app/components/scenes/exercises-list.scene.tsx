import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppStore } from '../../core/interfaces/IAppStore';

class ExerciseItem extends Component<any, any> {
  render() {
    const { title } = this.props.exercise;
    return (
      <div>
        <p>{title}</p>
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
      resultItems =  resultItems.filter((item) => item.topic == filterBy);
    }

    if (sortBy) {
      resultItems = resultItems.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    }

    return resultItems;
  }

  render() {
    // const { exerciseItems } = this.props;
    const exerciseItems = [];
    const itemTypes: string[] = exerciseItems.map(item => item.category);
    const filterOptions: string[] = [...new Set(itemTypes)];
    const sortOptions = ['createdAt'];
    const resultItems = this.processItems(exerciseItems);

    return (
      <div style={styles.listContainer}>
        Sort By:
        <select onChange={this.onChangeSortBy}>
          { sortOptions.map(option => <option value={option}>{option}</option>) }
        </select>
        Select Type:
        <select onChange={this.onChangeFilterBy}>
          <option value={''}>all</option>
          { filterOptions.map(option => <option value={option}>{option}</option>) }
        </select>
        { this.renderExercises(resultItems) }
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexFlow: 'column',
  }
}

const mapStateToProps = (state: IAppStore) => {
  return {
    exerciseItems: state.exercises.exercises
  }
}

export const ConnectedExercisesListScene = connect(mapStateToProps, null)(ExercisesListScene);
