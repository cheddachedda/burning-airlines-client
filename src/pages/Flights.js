import { Component } from 'react';
import axios from 'axios';

import '../css/Flights.css';

const SERVER_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      flights: []
    };
    this.renderFlightRow = this.renderFlightRow.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    const fetchFlights =() => {
      axios(SERVER_URL).then((response) => {
        this.setState({ flights: response.data })
      });
    }
    fetchFlights()
  }

  renderFlightRow(flight) {
    if (flight) {
      return (
        <tr key={ flight.id }>
          <td>{ flight.origin }</td>
          <td>{ flight.destination }</td>
          <td>{ flight.date }</td>
          <td><button>View Seats</button></td>
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
    console.log('render');
    return (
      <div>
        <h1>Flights</h1>
        { this.createTable() }
      </div>
    );
  }
}

export default Flights;
