import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';

const tabs = [
  {title: 'one', content: 'My Name is Zack'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Root extends React.Component {
  render () {
    return (
      <section className="widgets">
        <Tabs tabs={ tabs }/>
        <Clock/>
      </section>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});
