import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

const tabs = [
  {title: 'ABOUT ME', content: 'Zack Yu'},
  {title: 'EDUCATION', content: 'Second pane here'},
  {title: 'EXPERIENCE', content: 'Third pane here'}
];

class Root extends React.Component {
  render () {
    return (
      <section className="widgets">
        <section className="clock-container">
          <h2>Clock</h2>
          <Clock/>
        </section>

        <section className="weather-container">
          <h2>Weather</h2>
          <Weather/>
        </section>

        <section className="tabs-container">
          <h2>Tabs</h2>
          <Tabs tabs={ tabs }/>
        </section>
      </section>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});
