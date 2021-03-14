import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionSearchIndicesJson } from '../../store/actions/search';
import './SearchInput.scss';

const mapStateToProps = ({ search }) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  fetchSearchIndices: bindActionCreators(query => actionSearchIndicesJson(query), dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ fetchSearchIndices, search }) => {
  const [ isShow, setShow ] = useState(false);
  const [ keyword, setKeyword ] = useState('');
  const [ selectedAssistIndex, setSelectedAssistIndex ] = useState(0);
  const { addressList, nameList } = search.indices;

  const onKeyUpSearchInput = e => {
    setKeyword(e.target.value);
    if (e.target.value != '') {
      fetchSearchIndices(e.target.value);
    }
  }

  const preventInputKeyEvent = e => {
    switch (e.keyCode) {
      case 40:
      case 38: {
        e.preventDefault();
      } break;
    }
  }

  const onKeyUpArrow = e => {
    switch (e.keyCode) {
      case 40: {
        if (selectedAssistIndex < (addressList.length + nameList.length - 1)) {
          setSelectedAssistIndex(index => index + 1);
        }
      } break;
      case 38: {
        if (selectedAssistIndex != 0) {
          setSelectedAssistIndex(index => index - 1);
        }
      } break;
    }
  }
  
  useEffect(() => {
    document.onKeyUp = onKeyUpArrow
  }, [ ])

  return (
    <div className="search-input-wrapper" onMouseLeave={e => setShow(false)} onKeyUp={onKeyUpArrow}>
      <input className="search-input" type="text" placeholder="검색" 
        onKeyUp={onKeyUpSearchInput} 
        onMouseOver={e => setShow(true)}
        onKeyDown={preventInputKeyEvent}
        onKeyPress={preventInputKeyEvent}
      />
      <div className={`search-assistent-wrapper ${isShow ? "show" : "hide"}`}>
        <div className="search-assistent-label">지역</div>
        <ul className="search-assistent-list">
          {
            addressList ? addressList.map((item, index) => {
              return (
                <li className={`search-assistent-item ${selectedAssistIndex == index ? "active" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: item.keyword.replace(keyword, `<strong>${keyword}</strong>`)
                  }}
                >
                </li>
              )
            }) : <></>
          }
        </ul>
        <div className="search-assistent-label">건물명/단지명</div>
        <ul className="search-assistent-list">
          {
            nameList ? nameList.map((item, index) => {
              return (
                <li className={`search-assistent-item ${selectedAssistIndex == (index + addressList.length) ? "active" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: `
                      ${item.keyword.replace(keyword, `<strong>${keyword}</strong>`)}
                      <span class="search-assistent-item-value">${item.value}</span>
                    `
                  }}
                >
                </li>
              )
            }) : <></>
          }
        </ul>
      </div>
    </div>
  )
})
