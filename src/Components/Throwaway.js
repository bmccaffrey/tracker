import React from 'react';
import GetExample from './GetExample';

const API_FORM_TESTER = () => (
  <div>
    <div>
      <form name="throwaway" action="/" method="post">
        <input type="text" name="name" id="name-input" placeholder="Name?" />
        <input type="text" name="metric" id="metric-input" placeholder="Metric>" />
        <input type="text" name="freq" id="freq-input" placeholder="Frequency?" />
        <input type="text" name="why" id="why-input" placeholder="Why?" />
        <input type="text" name="tracks" id="tracks-input" placeholder="Success?" />
        <input type="submit" value="Save" />
      </form>
    </div>
    <div>
      <GetExample />
    </div>
  </div>
);

export default API_FORM_TESTER;
