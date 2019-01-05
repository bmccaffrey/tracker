/* eslint react/jsx-one-expression-per-line: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Accordion } from '../Utilities';
import { Theme } from '../Elements';

const StyledRow = styled.div`
  ${Theme()};
  text-indent: 10%;
`;

export default class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activities: [],
      value: '',
      items: [],
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.getActivities();
  }

  fetcher = (route, method) => {
    const response = fetch(route, { method })
      .then(body => body.text())
      .then(text => JSON.parse(text))
      .catch(err => console.log(err));
    return response;
  };

  async getActivities() {
    this.setState({ loading: false, activities: await this.fetcher('/all') });
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { activities, value } = this.state;
    return (
      <div>
        <h1>Alright!</h1>
        <h2>We&apos;re currently tracking your:</h2>
        {activities.length ? (
          activities.map(activity => (
            <Accordion>
              <StyledRow>{activity.name}</StyledRow>
              <select id="metric-select">
                <option value="">Please select a metric</option>
                <option value="">Yes or No</option>
                <option value="">Number</option>
                <option value="">Time</option>
              </select>
              <button style={{ border: '1px solid black' }}>Add Metric</button>
            </Accordion>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    );
  }
}

// Items is exported to Analytics.js
