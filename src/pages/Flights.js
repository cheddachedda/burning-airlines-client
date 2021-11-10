import { Component } from 'react';
import Plane from '../components/Plane';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flight: {
        "id":10,
        "origin":"JFK",
        "destination":"SFO",
        "date":"-4712-01-01",
        "airplane_id":10,
        "created_at":"2021-11-09T22:33:13.303Z",
        "updated_at":"2021-11-09T22:33:13.303Z",
        "url":"http://localhost:3000/flights/10.json",
      }
    };
  }


  componentDidMount() {
    const fetchFlights =() => {
      axios(SERVER_URL).then((response) => {
        console.log(response.data)
      });
    }
    fetchFlights()
  }

  render() {
    return (
      <div>
        <h1>Flights</h1>
        <Plane />
      </div>
    );
  }
}

export default Flights;
