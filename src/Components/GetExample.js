import React, { Component } from 'react';

export default class GetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      examples: [],
    };
  }

  componentDidMount() {
    this.getExamples();
  }

  fetcher = (route, method) => {
    const response = fetch(route, { method })
      .then(body => body.text())
      .then(text => JSON.parse(text))
      .catch(err => console.log(err));
    return response;
  };

  async getExamples() {
    this.setState({ loading: false, examples: await this.fetcher('/all') });
  }

  render() {
    // let name, metric, freq, why, tracks;
    const { examples } = this.state;
    return (
      <div>{examples.length ? examples.map(elm => <h2>{elm.name}</h2>) : <h3>Loading</h3>}</div>
    );
  }
}
