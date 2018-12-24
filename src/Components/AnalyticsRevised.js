/* eslint react/jsx-one-expression-per-line: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from '../Elements';

const StyledRow = styled.div`
  ${Theme()};
  text-indent: 10%;
`;
const StyledH1 = styled.h1`
  text-indent: 10%;
  margin-top: 0px;
`;
const MarginContainer = styled.div`
  margin: 5%;
`;
const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  height: 20px;
  width: 20px;
  float: left;
  position: relative;
  left: 25px;
  top: 2px;
`;

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activities: [],
    };
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

  render() {
    const { activities } = this.state;
    return (
      <MarginContainer>
        <h1 style={{ marginBottom: '0px' }}>Let&apos;s analyze</h1>
        <StyledH1>&amp; compare</StyledH1>
        <h2>and see if we can&apos;t come up with some insights...</h2>
        {activities.length ? (
          activities.map(activity => (
            <StyledRow>
              <Checkbox type="checkbox" name="" id="" />
              <label>{activity.name}</label>
            </StyledRow>
          ))
        ) : (
          <StyledRow>Loading</StyledRow>
        )}
      </MarginContainer>
    );
  }
}
