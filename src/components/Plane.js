import { Component } from 'react';
import '../css/Plane.css';

class Plane extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selected: {}
    // };
    this.renderRow = this.renderRow.bind(this);
    this.renderSeat = this.renderSeat.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event){
    event.preventDefault();
    // console.log(event.target);
    // this.setState({ selected: event.target.name });
    this.props.wawawa(event.target.name)
  }


  renderSeat(row, column, userID) {
    const rowName = (row + 1).toString(); // Adds 1 to rowNo (row's index)
    const columnName = String.fromCharCode(column + 65);
    const seatName = rowName + columnName;

    const className = this.props.selected === seatName ? "selected-seat" : "seat";

    return (
      <button key={seatName} name={seatName} className={className} onClick={this._onClick} >
        { seatName }
      </button>
    );
  }

  renderRow(seats, row) {
    return (
      <div key={ row }>
        { seats.map((userID, column) => this.renderSeat(row, column, userID)) }
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
