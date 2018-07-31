/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/button-has-type: 0 */
import React, { Component } from 'react';
import Toggle from './Toggle';

// TODO: -- set default in case children.length <= 1

const Accordion = (props) => {
  const { children } = props;
  let title;
  let hide;
  children.length >= 2 ? (title = children[0]) : (title = children);
  children.length >= 2
    ? (hide = children.slice(1))
    : (hide = 'Oops, something seems to be missing here!');

  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <p onClick={toggle} onKeyPress={toggle}>
            {title}
          </p>
          {on && <p>{hide}</p>}
        </div>
      )}
    </Toggle>
  );
};
export default Accordion;
