import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionSearchAddressJson, actionSearchNameJson } from '../../store/actions/search';
import './SearchInput.scss';

const mapStateToProps = ({ search }) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  fetchSearchAddressJson: bindActionCreators(query => actionSearchAddressJson(query), dispatch),
  fetchSearchNameJson: bindActionCreators(query => actionSearchNameJson(query), dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ fetchSearchAddressJson, fetchSearchNameJson, search }) => {
  const [ isShow, setShow ] = useState(false);

  const onKeyUpSearchInput = e => {
    // fetchSearchJson.then(res => console.log(res))
    console.log('fetchSearchAddressJson',fetchSearchAddressJson)
    fetchSearchAddressJson()
    fetchSearchNameJson()
    console.log(search)
  }

  const fetchSearchJson = () => {
    // const response = await 
  }

  return (
    <div className="search-input-wrapper" onMouseLeave={e => setShow(false)}>
      <input className="search-input" type="text" placeholder="검색" onKeyUp={onKeyUpSearchInput} onMouseOver={e => setShow(true)} />
      <div className={`search-assistent-wrapper ${isShow ? "show" : "hide"}`}>
        <ul className="search-assistent-list">
          <li>매매</li>
          <li>전세</li>
          <li>월세</li>
        </ul>
        <ul className="search-assistent-list">
          <li>아파트</li>
          <li>오피스텔</li>
          <li>주택</li>
        </ul>
      </div>
    </div>
  )
})
