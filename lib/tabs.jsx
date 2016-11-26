import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor (props) {
    super(props);

    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.state = {
      selectedIdx: 0
    };
  }

  handleClickEvent(idx) {
    this.setState({ selectedIdx: idx });
  }

  render () {
    const selectedTab = this.props.tabs[this.state.selectedIdx];

    return (
      <article className="tabs">
        <Header tabs={ this.props.tabs }
          handleClickEvent={ this.handleClickEvent }/>
        <div className='tab-content'>
          <p>
            { selectedTab.content }
          </p>
        </div>
      </article>
    );
  }
}

export default Tabs;
