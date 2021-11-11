import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/login.json';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  };


  _handleChange(event) {
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios.post(SERVER_URL, {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
         <form onSubmit={ this._handleSubmit }>

           <input
              name="email"
              type="email"
              onChange={ this._handleChange }
              value={ this.state.email }
              placeholder="email"
              required
           />
           <input
              name="password"
              type="password"
              onChange={ this._handleChange }
              value={ this.state.password }
              placeholder="password"
              required
           />
           <input
              type="submit"
              value="Log In"
              required
           />
         </form>
      </div>
    );
  }
}

export default LogIn;
