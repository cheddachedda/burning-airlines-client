import { Component } from 'react';
import '../css/Plane.css';

class Plane extends Component {
  constructor() {
    super();

    // this.state = {
    //   seats: [
    //     [ '-', 1, '-', '-' ],
    //     [ 7, '-', '-', '-' ],
    //     [ 8, 9, '-', 10 ],
    //     [ 14, '-', '-', 6 ]
    //   ]
    // };

    this.renderRow = this.renderRow.bind(this);
  }

  renderSeat(seatName) {
    return (
      <button className="seat" key={seatName}>
        { seatName }
      </button>
    );
  }

  renderRow(seats, i) {
    console.log(seats);
    return (
      <div className="seat-row" key={ i }>
        { seats.map(this.renderSeat) }
      </div>
    )
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Plane;
