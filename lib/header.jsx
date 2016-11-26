import React from 'react';

const Header = ({ tabs, handleClickEvent }) => {
  return (
    <ul>
      {
        tabs.map((tab, idx) => (
          <li key={ idx } onClick={ () => { handleClickEvent(idx) }}>
            <p>{ tab.title }</p>
          </li>)
        )
      }
    </ul>
  )
}

export default Header;
