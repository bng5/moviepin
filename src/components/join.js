import React from 'react';
import SignIn from './signin';

class Join extends SignIn {
  constructor() {
    super();

    this.setState({
      emailValue: ''
    });
  }

  emailField() {
    return <input type='text'
                  className='form__text-input'
                  name='email'
                  value={this.state.emailValue}
                  onChange={this.emailChange.bind(this)}/>
  }

  shouldActivateSubmitButton() {
    const isEmailValid = this.state.emailValue.split('@').length == 2;

    return (super.shouldActivateSubmitButton() && isEmailValid);
  }

  emailChange(event) {
    this.setState({ emailValue: event.target.value });
    this.activateSubmitButton();
  }

  render() {
    return (
      <form className='form'>
        {this.emailField()}

        {this.usernameField()}

        {this.passwordField()}

        {this.submitButton('Form')}
        <p>- or -</p>
        <a className='fb-sso'></a>
      </form>
    );
  }
}

export default Join;
