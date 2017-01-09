import React, { Component } from 'react';

class InputField extends Component {

  fieldChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <input type={this.props.inputType}
             className='form__text-input'
             name={this.props.inputName}
             value={this.props.fieldValue}
             placeholder={this.props.inputName}
             onChange={this.fieldChange.bind(this)}/>
    );
  }
}

class AccessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableOrActive: 'disabled'
    };
  }

  activateSubmitButton(props) {
    if (props.shouldDisable) {
      this.setState({ disableOrActive: 'disabled' });
    } else {
      this.setState({ disableOrActive: 'active' });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.activateSubmitButton(nextProps)
  }

  render() {
    return (
      <form className='form'>
        {this.props.children}

        <input type='submit'
               className={'form__submit form__submit--' +
                          this.state.disableOrActive}
               disabled={this.props.shouldDisable}
               value={this.props.submitLabel}/>

        <div className='form__submit form__submit--fb'>
          <a>fb</a>
        </div>
      </form>
    );
  }
}

export { AccessForm, InputField };
