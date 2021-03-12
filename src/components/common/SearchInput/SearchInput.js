import React, { useState } from 'react';
import './SearchInput.scss';

export default ({ }) => {
  const [ isShow, setShow ] = useState(false);

  return (
    <div className="search-input-wrapper" onMouseLeave={e => setShow(false)}>
      <input className="search-input" type="text" placeholder="검색" onMouseOver={e => setShow(true)} />
      <div className={`search-filter-wrapper ${isShow ? "show" : "hide"}`}>
        {/* <ul className="search-filter-list">
          <li>매매</li>
          <li>전세</li>
          <li>월세</li>
        </ul>
        <ul className="search-filter-list">
          <li>아파트</li>
          <li>오피스텔</li>
          <li>주택</li>
        </ul> */}
      </div>
    </div>
  )
}
