import { Component } from 'react';
import axios from 'axios';

import '../css/Flights.css';

const SERVER_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    };
    this.renderFlightRow = this.renderFlightRow.bind(this);
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ flights: response.data })
      });
    }
    fetchFlights()
  }

  _viewFlight(event) {
    const url = `http://localhost:3001/flights/${ event.target.id }`;
    window.location = url;
  }

  renderFlightRow(flight) {
    if (flight) {
      return (
        <tr key={ flight.id }>
          <td>{ flight.origin }</td>
          <td>{ flight.destination }</td>
          <td>{ flight.date }</td>
          <td><button id={ flight.id } onClick={ this._viewFlight }>View Seats</button></td>
        </tr>
      )
    };
  }

  createTable() {
    return (
      <table>
        <tbody>
          { this.state.flights.map( this.renderFlightRow ) }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1>Flights</h1>
        { this.createTable() }
      </div>
    );
  }
}

export default Flights;
