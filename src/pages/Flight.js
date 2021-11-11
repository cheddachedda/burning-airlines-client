import { Component } from 'react';
import axios from 'axios';

import Plane from '../components/Plane';

class Flight extends Component {
  constructor() {
    super();
    this.state = {
      id: window.location.href.split('/').pop(),
      flight: {},
      selected: '',
    }
    this._selectSeat = this._selectSeat.bind(this);
    this._clearSelected = this._clearSelected.bind(this);
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

  _selectSeat(seatName) {
    this.setState({ selected: seatName });
  };

  _clearSelected() {
    this.setState({ selected: '' });
  }

  renderBookingButton() {
    if (this.state.selected !== '') {
      return (
        <div>
          <button>Book seat { this.state.selected }</button>
          <button onClick={ this._clearSelected }>Clear selection</button>
        </div>
      );
    }
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
        { this.renderBookingButton() }
        <Plane selected={ this.state.selected } wawawa={this._selectSeat} seats={ this.state.flight.seats }
        />
      </div>
    );
  }
}

export default Flight;
