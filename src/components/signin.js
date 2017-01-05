import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: '',
      disableOrActive: 'disable'
    };
  }

  usernameField() {
    return <input type='text'
                  className='form__text-input'
                  name='username'
                  value={this.state.usernameValue}
                  onChange={this.usernameChange.bind(this)}/>;
  }

  passwordField() {
    return <input type='pasword'
                  className='form__text-input'
                  name='password'
                  value={this.state.passwordValue}
                  onChange={this.passwordChange.bind(this)}/>
  }

  submitButton(submitLabel='Sign in') {
    return <input type='submit'
                  className={'form__submit--' + this.state.disableOrActive}
                  value={submitLabel}/>
  }

  shouldActivateSubmitButton() {
    return (this.state.usernameValue && this.state.passwordValue);
  }

  activateSubmitButton() {
    if (this.shouldActivateSubmitButton()) {
      this.setState({ disableOrActive: 'active' });
    } else {
      this.setState({ disableOrActive: 'disable' });
    }
  }

  usernameChange(event) {
    this.setState({ usernameValue: event.target.value });
    this.activateSubmitButton();
  }

  passwordChange(event) {
    this.setState({ passwordValue: event.target.value });
    this.activateSubmitButton();
  }

  render() {
    return (
      <form className='form'>
        {this.usernameField()}

        {this.passwordField()}

        <p>- or -</p>
        {this.submitButton()}
        <a className='fb-sso'></a>
      </form>
    );
  }
}

export default SignIn;
