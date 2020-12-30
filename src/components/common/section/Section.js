import React from 'react';
import './Section.scss';

const Section = ({ title, children, scroll }) => {
  return (
    <>
      <h4 className="section_title">{title}</h4>
      <section className={`section${scroll ? ` scroll_${scroll}` : ''}`}>
        {
          scroll ? (
            <div>
              { children }
            </div>
          ) : (
            children
          )
        }
      </section>
    </>
  )
}

export default Section;