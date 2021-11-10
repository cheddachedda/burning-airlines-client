import { Component } from 'react';
import axios from 'axios';

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
      axios(SERVER_URL).then((response) => {
        this.setState({ flight: response.data });
      });
    }

    fetchFlight();
  }

  render() {
    return (
      <div>
        <h1>Flight { this.state.id || '-1' } show page coming soon</h1>
      </div>
    );
  }
}

export default Flight;
