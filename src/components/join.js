import React, { Component } from 'react';

import { AccessForm, InputField } from './access-form';

class Join extends Component {

  constructor() {
    super();

    this.state = {
      emailValue: '',
      usernameValue: '',
      passwordValue: '',
      shouldDisable: true
    };
  }

  componentWillMount() {
    this.setState({
      emailValue: ''
    });
  }

  shouldActivateSubmitButton(email, username, password) {
    if (email, username && password) {
      this.setState({ shouldDisable: false });
    } else {
      this.setState({ shouldDisable: true });
    }
  }

  emailChange(email) {
    this.setState({ emailValue: email });

    const isEmailValid = this.state.emailValue.split('@').length == 2;
    this.shouldActivateSubmitButton(isEmailValid,
                                    this.state.username,
                                    this.state.passwordValue);
  }

  usernameChange(username) {
    this.setState({ usernameValue: username });
    this.shouldActivateSubmitButton(this.state.emailValue,
                                    username,
                                    this.state.passwordValue);
  }

  passwordChange(password) {
    this.setState({ passwordValue: password });
    this.shouldActivateSubmitButton(this.state.emailValue,
                                    this.state.usernameValue,
                                    password);
  }

  render() {
    return (
      <AccessForm submitLabel='Sign In'
                  shouldDisable={this.state.shouldDisable}>
        <InputField fieldValue={this.state.emailValue}
                    inputType='text'
                    inputName='email'
                    onChange={(email) => {
                      this.emailChange(email);
                    }}/>
        <InputField fieldValue={this.state.usernameValue}
                    inputType='text'
                    inputName='username'
                    onChange={(username) => {
                      this.usernameChange(username);
                    }}/>

        <InputField fieldValue={this.state.passwordValue}
                    inputType='password'
                    inputName='password'
                    onChange={(password) => {
                      this.passwordChange(password)
                    }}/>
      </AccessForm>
    );
  }
}

export default Join;
