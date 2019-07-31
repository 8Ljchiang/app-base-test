import React, { Component } from 'react';

export class EditableField extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      inputValue: '',
    }
  }

  toggleEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  save() {
    this.props.save(this.state.inputValue);
    this.toggleEditing();
  }

  onChange(e) {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const { isEditing } = this.state;
    const { placeholder, value } = this.props;
    return (
      <div>
        { isEditing ? (
          <div>
            <input type="text" placeholder={placeholder} onChange={this.onChange.bind(this)} />
            <button onClick={this.save.bind(this)}>Save</button>
          </div>
        ): (
          <p onClick={this.toggleEditing.bind(this)}>{value}</p>
        ) }
      </div>
    );
  }
}
