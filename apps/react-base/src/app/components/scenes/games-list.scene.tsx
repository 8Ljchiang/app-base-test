import React, { Component } from "react";
import { BannerLayout } from '../layouts/BannerLayout';
import { CenterLayout } from '../layouts/center.layout';
import { NarrowLayout } from '../layouts/narrow.layout';
import { GamesList } from '../units/games-list.component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteGame } from '../../redux/games.actions';

export class GamesListScene extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      sortByField: 'createdAt',
    }

    this.onChangeSortBy = this.onChangeSortBy.bind(this);
    this.onChangeFilterBy = this.onChangeFilterBy.bind(this);
  }

  onChangeSortBy(event) {
    this.patchState('sortBy', event.target.value);
  }

  onChangeFilterBy(event) {
    this.patchState('filterBy', event.target.value);
  }

  patchState(key: string, value: string) {
    if (key && value) {
      this.setState({
        [key]: value
      });
    }
  }

  render() {
    const { games, actions } = this.props;
    const { sortBy, filterBy } = this.state;

    const itemTypes: string[] = games.map(item => item.type);
    const filterOptions: string[] = [...new Set(itemTypes)];
    const sortOptions = ['createdAt', 'upvotes'];

    let resultItems = games;

    if (filterBy) {
      resultItems = resultItems.filter(item => item.type === filterBy);
    }

    if (sortBy) {
      resultItems = resultItems.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    }

    return (
      <BannerLayout title={'Games List'}>
        <CenterLayout>
          <NarrowLayout>
            <p>Sort By</p>
            <select name="sort" id="sort" onChange={this.onChangeSortBy}>
              { sortOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
            <p>Select Type</p>
            <select name="filter" id="filter">
              { filterOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
            <GamesList games={resultItems} actions={actions}/>
          </NarrowLayout>
        </CenterLayout>
      </BannerLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      upvoteGame
    }, dispatch)
  }
}

export const ConnectedGamesListScene = connect(mapStateToProps, mapDispatchToProps)(GamesListScene);
