import React, { Component } from 'react';

import '../../styles/lists.css';
export class ItemCard extends Component<any, any> {
  render() {
    const { title, titleTag, subTitle, description, tagText } = this.props;
    return (
      <div className="list-item-card-container">
        <div className="list-item-card__title-container"><h3>{ title }</h3><p>{ titleTag }</p></div>
        <p>{ subTitle }</p>
        <p>{ tagText }</p>
      </div>
    );
  }
}

export class ExpandedItemCard extends Component<any, any> {
  render() {
    const { title, titleTag, subTitle, description, tagText } = this.props;
    return (
      <div className="list-item-card-container">
        <div><h3>{ title }</h3><p>{ titleTag }</p></div>
        <p>{ subTitle }</p>
        <p>{ description }</p>
        <p>{ tagText }</p>
      </div>
    );
  }
}

export class ExpandibleListItemCard extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    }

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;
    const buttonText = isExpanded ? '-' : '+';
    return (
      <div>
        <div>
          <div>{ isExpanded ? (<ExpandedItemCard {...this.props} />) : (<ItemCard {...this.props} />) }</div>
          <button onClick={this.toggleExpanded}>{ buttonText }</button>
        </div>
      </div>
    )
  }
}
