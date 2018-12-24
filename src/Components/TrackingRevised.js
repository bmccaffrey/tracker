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
    const { activities } = this.state;
    return (
      <div>
        <h1>Alright!</h1>
        <h2>We&apos;re currently tracking your:</h2>
        {activities.length ? (
          activities.map(activity => (
            <Accordion>
              <StyledRow>{activity.name}</StyledRow>
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
