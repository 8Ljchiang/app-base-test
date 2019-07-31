import React, { Component } from 'react';

export class EditableField extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
  }

  toggleEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  save(value: string) {
    this.props.save(value);
    this.toggleEditing();
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
          <p onClick={this.toggleEditing.bind(this)}>{value}</p>
        ) }
      </div>
    );
  }
}
