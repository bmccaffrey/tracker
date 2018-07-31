/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/button-has-type: 0 */
import React, { Component } from 'react';
import Toggle from './Toggle';

const Accordion = (props) => {
  const { children } = props;
  const title = children[0];
  const Hide = children.slice(1);
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <p onClick={toggle} onKeyPress={toggle}>
            {title}
          </p>
          {on && <p>{Hide}</p>}
        </div>
      )}
    </Toggle>
  );
};
export default Accordion;
