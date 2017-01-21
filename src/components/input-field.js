import React, { Component } from 'react';

class InputField extends Component {

  fieldChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <input type={this.props.inputType}
             className={'form__text-input ' +
                        this.props.className}
             name={this.props.inputName}
             value={this.props.fieldValue}
             placeholder={this.props.inputName}
             onChange={this.fieldChange.bind(this)}/>
    );
  }
}

export default InputField;
