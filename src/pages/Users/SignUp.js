import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
      name: this.state.name,
      email: this.state.email,
      password_digest: this.state.password,
      admin: false
    }).then((response) => {
      console.log(this.state.name, "user created");
    });
  }

  render() {
    return (
    <div>
      <h1>Sign Up!</h1>
       <form onSubmit={ this._handleSubmit }>

         <input
            name="name"
            type="text"
            onChange={ this._handleChange }
            value={ this.state.name }
            placeholder="name"
            required
         />
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
            value="Sign up"
            required
         />
       </form>
    </div>
    );
  }
}


export default SignUp;
