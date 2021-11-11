import { Component } from 'react';
import '../css/Plane.css';

class Plane extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.renderSeat = this.renderSeat.bind(this);
  }

  renderSeat(row, column) {
    const seatName = `${row}-${column}`
    return (
      <button
        onClick={this.props.wawawa}
        seatname={ seatname }
        className="seat" key={seatName}>
        { seatName }
      </button>
    );
  }

  renderRow(seats, rowNo) {
    return (
      <div key={ rowNo }>
        {seats.map((seat, number) => console.log(seat, number))}
        <span>{ rowNo }</span>
      </div>
    )
  }

  render() {
    if (this.props.seats) {
      return (
        <div>
          { this.props.seats.map((row, i) => this.renderRow(row, i)) }
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
