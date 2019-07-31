import React, { Component } from 'react';

export class EditableField extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
  }

  save(value: string) {
    this.props.save(value);
  }

  render() {
    const { isEditing } = this.state;
    const { placeholder, value } = this.props;
    return (
      <div>
        { isEditing ? (
          <div>
            <input type="text" placeholder={placeholder} />
            <button onClick={this.save.bind(this)}>Save</button>
          </div>
        ): (
          <p>{value}</p>
        ) }
      </div>
    );
  }
}
