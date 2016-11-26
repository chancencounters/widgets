import React from 'react';

const Header = ({ tabs, handleClickEvent }) => {
  return (
    <ul>
      {
        tabs.map((tab, idx) => (
          <li key={ idx } onClick={ () => { handleClickEvent(idx) }}>
            <h1>{ tab.title }</h1>
          </li>)
        )
      }
    </ul>
  )
}

export default Header;
