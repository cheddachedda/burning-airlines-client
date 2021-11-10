import { Component } from 'react';
import '../css/Plane.css';

class Plane extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  renderSeat(row, column) {
    const seatName = `R${ row }C${ column }`
    return (
      <button className="seat" key={seatName}>
        { seatName }
      </button>
    );
  }

  // TO DO: Fix this!!!!
  renderRow(seats, rowNo) { // seats is an array of seats in that row
    return (
      <div className="seat-row" key={ rowNo }>
        { seats.map((rowNo, i) => this.renderSeat(rowNo, i)) }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderRow([ 0, 1, 2, 3, 4, 5 ], 0) } // AND THIS!!!
        { this.renderRow([ 0, 1, 2, 3, 4, 5 ], 1) }
      </div>
    );
  }
}

export default Plane;
