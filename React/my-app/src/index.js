import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timedID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState(
      {date: new Date()}
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timedID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);