import { Component } from 'react';
import axios from 'axios';

import Plane from '../components/Plane';

class Flight extends Component {
  constructor() {
    super();
    this.state = {
      id: window.location.href.split('/').pop(),
      flight: {}
    }
  }

  componentDidMount() {
    const SERVER_URL = `http://localhost:3000/flights/${ this.state.id }.json`;

    const fetchFlight = () => {
      axios.get(SERVER_URL).then((response) => {
        this.setState({ flight: response.data });
      });
    }

    fetchFlight();
  }

  render() {
    const f = this.state.flight;
    return (
      <div>
        <h1>FLIGHT FLIGHT FLIGHT</h1>
        <h1>Flight # { f.id } </h1>
        <p> Origin: { f.origin} </p>
        <p> Destination: { f.destination } </p>
        <p> Date: { f.date } </p>
        <Plane />
      </div>
    );
  }
}

export default Flight;
