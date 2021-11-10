import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
      date: '',
      flights: []
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.renderFlight = this.renderFlight.bind(this);
    }

  _handleChange(event) {
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios(SERVER_URL).then((response) => {
      // Filter the flights that match state
      const allFlights = response.data;

      const filteredFlights = allFlights.filter((flight) => {
        if (flight.origin === this.state.origin &&
            flight.destination === this.state.destination ||
            flight.date === this.state.date) {
          return flight;
        }
      })

      this.setState({ flights: filteredFlights });
    });
  }
  _viewFlight(event) {
    const url = `http://localhost:3001/flights/${ event.target.id }`;
    window.location = url;
  }
  renderFlight(flight) {
    if (flight) {
      return (
        <tr key={ flight.id }>
          <td>{ flight.origin }</td>
          <td>{ flight.destination }</td>
          <td>{ flight.date }</td>
          <td><button id={ flight.id } onClick={ this._viewFlight }>View seats</button></td>
        </tr>
      )
    };
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={ this._handleSubmit }>
          <input
            type="text"
            name="origin"
            onChange={ this._handleChange }
            value={ this.state.origin }
            placeholder="JFK"
          />
          <input
            type="text"
            name="destination"
            onChange={ this._handleChange }
            value={ this.state.destination }
            placeholder="LAX"
          />
          <input
            type="date"
            name="date"
            onChange={ this._handleChange }
            value={ this.state.date }
          />
          <input
            type="submit"
            value="Search for flights"
          />
        </form>

        <div>
          { this.state.flights.map(this.renderFlight)}
        </div>
      </div>
    );
  }
}

export default Search;
