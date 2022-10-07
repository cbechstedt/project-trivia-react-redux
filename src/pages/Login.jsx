import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    name: '',
    isBtnDisabled: true,
  };

  verify = () => {
    const { name, email } = this.state;
    if (name && email) {
      this.setState({ isBtnDisabled: false });
    } else {
      this.setState({ isBtnDisabled: true });
    }
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.verify);
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log('teste');
  };

  render() {
    const { email, name, isBtnDisabled } = this.state;
    return (
      <form onSubmit={ this.submitForm }>
        <input
          type="text"
          name="name"
          data-testid="input-player-name"
          id="name"
          value={ name }
          onChange={ this.handleChanges }
        />
        <input
          type="text"
          name="email"
          data-testid="input-gravatar-email"
          id="email"
          value={ email }
          onChange={ this.handleChanges }
        />
        <button
          data-testid="btn-play"
          type="submit"
          disabled={ isBtnDisabled }
        >
          Play
        </button>
      </form>
    );
  }
}

export default Login;
