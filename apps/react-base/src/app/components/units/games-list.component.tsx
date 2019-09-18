import React, { Component } from 'react';

class GameItem extends Component<any, any> {
  render() {
    const { game } = this.props;
    return (
      <div style={styles.itemContainer}>
        <p>{game.title}</p>
      </div>
    )
  }
}

export class GamesList extends Component<any, any> {
  renderGames(games: GameItem[]) {
    return games.map((game, index) => {
      return (<GameItem key={index} game={game} />)
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
    marginBottom: '4px',
    padding: '4px',
    border: '1px dashed gray'
  }
}
