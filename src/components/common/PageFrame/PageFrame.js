import React from 'react';
import './PageFrame.scss'  ;

const PageFrame = ({ children }) => {
  return (
    <div className="page_frame">
      <main>{children}</main>
    </div>
  )
}

export default PageFrame;