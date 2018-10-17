import React, { Component } from 'react';

export default class GetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      recipes: [],
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  get = route => {
    const response = fetch(route)
      .then(body => body.text())
      .then(text => JSON.parse(text))
      .catch(err => console.log(err));
    return response;
  };

  async getRecipes() {
    this.setState({ loading: false, recipes: await this.get('/recipes') });
  }

  render() {
    const { recipes } = this.state;
    const { name, ingredients, directions } = recipes;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{ingredients}</h3>
        <h4>{directions}</h4>
      </div>
    );
  }
}
