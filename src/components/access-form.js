import React, { Component } from 'react';

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

export default AccessForm;
