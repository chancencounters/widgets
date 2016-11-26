import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);

    this.tick = this.tick.bind(this);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    this.interval.clearInterval();
  }

  tick () {
    this.setState({time: new Date()});
  }

  render () {
    const time = this.state.time;

    return (
      <section className="clock">
        <span>
          <p>Time: </p>
          <p>{ time.toTimeString() }</p>
        </span>
        <span>
          <p>Date: </p>
          <p>{ time.toDateString() }</p>
        </span>
      </section>
    );
  }
}

export default Clock;
