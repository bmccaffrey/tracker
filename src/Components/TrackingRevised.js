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
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {}

  render() {
    const { activities } = this.state;
    return (
      <div>
        <h1>Alright!</h1>
        <h2>We&apos;re currently tracking your:</h2>
        {activities.length ? (
          activities.map(activity => (
            <Accordion>
              <StyledRow>{activity.name}</StyledRow>
              <form onSubmit={this.handleSubmit} name={activity.name}>
                <select id={activity.id} onChange={this.handleInput}>
                  <option value="">Please select a metric</option>
                  <option value="boolean">Boolean</option>
                  <option value="quantity">Quantity</option>
                  <option value="repetition">Repetitions</option>
                  <option value="duration">Duration</option>
                  <option value="frequency">Frequency</option>
                  <option value="time">Time of Day</option>
                  <option value="date">Date</option>
                  <option value="location">Location</option>
                  <option value="company">Company</option>
                </select>
                <button type="submit" style={{ border: '1px solid black' }}>
                  Add Metric
                </button>
              </form>
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
