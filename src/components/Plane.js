import { Component } from 'react';
import '../css/Plane.css';

class Plane extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  renderSeat(row, column) {
    const seatName = `${row}-${column}`
    return (
      <button className="seat" key={seatName}>
        { seatName }
      </button>
    );
  }

  renderRow(seats, rowNo) {
    return (
      <div key={ rowNo }>
        { seats.map(this.renderSeat) }
        <span>{ rowNo }</span>
      </div>
    )
  }

  render() {
    if (this.props.seats) {
      return (
        <div>
          { this.props.seats.map(this.renderRow) }
        </div>
      );
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default Plane;

// { this.renderRow([ 0, 1, 2, 3, 4, 5 ], 0) } // AND THIS!!!
// { this.renderRow([ 0, 1, 2, 3, 4, 5 ], 1) }
