import { Component } from 'react';
import './Plane.css';

class Plane extends Component {
  constructor() {
    super();
    this.state = {
      seats: [
        [ '-', 1, '-', '-' ],
        [ 7, '-', '-', '-' ],
        [ 8, 9, '-', 10 ],
        [ 14, '-', '-', 6 ]
      ]
    };

    this.renderRow = this.renderRow.bind(this);
  }

  renderSeat(seatName) {
    return (
      <button className="seat">
        { seatName }
      </button>
    );
  }

  renderRow(seats) {
    console.log(seats);
    return (
      <div className="seat-row">
        { seats.map(this.renderSeat) }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.state.seats.map(this.renderRow) }
      </div>
    );
  }
}

export default Plane;
