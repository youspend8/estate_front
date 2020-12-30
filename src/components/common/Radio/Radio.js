import React, { useState } from "react";
import './Radio.scss';

const Radio = ({ list, onChange }) => {
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const onClickItem = index => e => {
    setSelectedIndex(() => index);
    onChange(list[index]);
  }

  return (
    <div className="radio">
      {
        list.map((item, index) => {
          return (
            <span 
              className={`radio_item${selectedIndex === index ? ' selected' : ''}`} 
              key={index}
              onClick={onClickItem(index)}
            >{ item.name }</span>
          )
        })
      }
    </div>
  )
}

export default Radio;