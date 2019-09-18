import React, { Component } from 'react';
import { connect } from 'react-redux';

export class GameItemDetail extends Component<any, any> {

  render() {
    console.log(this.props);
    const { id } = this.props.match.params;
    const { games } = this.props;
    const filteredItems = games.filter((game) => game.id === id);

    if (filteredItems.length > 0) {
      const item = filteredItems[0];
      return (
        <div>
          <pre>
            <code>
              { JSON.stringify(item) }
            </code>
          </pre>
        </div>
      );
    }

    return (
      <div>
        No Item Found
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.games
  }
}

export const ConnectedGameItemDetail = connect(mapStateToProps, null)(GameItemDetail);
