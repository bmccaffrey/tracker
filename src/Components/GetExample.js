import React, { Component } from 'react';

export default class GetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      examples: [],
      editing: false,
    };
    // this.toggleEditing = this.toggleEditing.bind(this);
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

  // toggleEditing() {
  //   this.setState(state => ({
  //     editing: !state.editing,
  //   }));
  // }

  toggle = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  stuff = x => {
    // x.map(elm => <h2>{elm.name}</h2>);
    const visible = editing ? 'visible' : 'hidden';
    const { editing } = this.state;
    return x.map(elm => {
      return (
        <>
          <input type="checkbox" />
          <label>{elm.name}</label>
          <br />
        </>
      );
    });
  };

  render() {
    // let name, metric, freq, why, tracks;
    const { examples, editing } = this.state;
    const visible = editing ? 'visible' : 'hidden';
    return (
      <div>
        <br />
        <button onClick={this.toggle}>Edit</button>
        <br />
        {examples.length ? (
          examples.map(elm => {
            return (
              <>
                <br />
                <input type="checkbox" style={{ visibility: visible }} />
                <label>{elm.name}</label>
                <br />
              </>
            );
          })
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    );
  }
}

// const Input = styled.input.attrs({
//   type: 'checkbox',
// })`
// visibility:
// `;
// <input type="checkbox"/><label>{elm.name}</label>
