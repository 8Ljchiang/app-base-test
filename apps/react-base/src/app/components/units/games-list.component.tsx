import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameItem extends Component<any, any> {
  constructor(props) {
    super(props);

    this.upvoteGame = this.upvoteGame.bind(this);
  }

  upvoteGame() {
    const { id } = this.props.game;
    this.props.actions.upvoteGame(id);
  }

  render() {
    const { game } = this.props;
    return (
      <div style={styles.itemContainer}>
        <Link to={`/games/${game.id}`}>{game.title}</Link>
        <p>{game.upvotes}</p>
        <button onClick={this.upvoteGame}>upvote</button>
      </div>
    )
  }
}

export class GamesList extends Component<any, any> {
  renderGames(games: GameItem[]) {
    const { actions } = this.props;
    return games.map((game, index) => {
      return (<GameItem key={index} game={game} actions={actions} />)
    });
  }

  render() {
    const { games } = this.props;
    return (
      <div style={styles.listContainer}>
        { this.renderGames(games) }
      </div>
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
    marginBottom: '4px',
    padding: '4px',
    border: '1px dashed gray'
  }
}
