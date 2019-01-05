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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  async postMetric(data) {
    console.log(data);
    return fetch('/addmetric', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const data = [e.target.id, this.state.value];
    this.postMetric(data);
    e.preventDefault();
  }

  async postTracks(data) {
    console.log(data);
    return fetch('/addtracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  async triggerModal() {}

  async addData() {
    this.triggerModal()
      .then(data => this.postTracks(data))
      .catch(err => console.log(err));
  }

  render() {
    const { activities } = this.state;
    return (
      <div>
        <h1>Alright!</h1>
        <h2>We&apos;re currently tracking your:</h2>
        {activities.length ? (
          activities.map(activity => (
            <Accordion>
              <StyledRow>
                <button
                  style={{ margin: '0 5% 0 -8%', borderRadius: '50%' }}
                  onClick={this.postTracks}
                >
                  +
                </button>
                {activity.name}
              </StyledRow>
              <form onSubmit={this.handleSubmit} name={activity.name} id={activity.id}>
                <select id={activity.id} onChange={this.addData}>
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
