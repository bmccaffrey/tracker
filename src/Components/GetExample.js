import React, { Component } from 'react';

export default class GetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      examples: [],
      editing: false,
      selected: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteExamples = this.deleteExamples.bind(this);
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

  toggle = property => {
    this.setState({
      [property]: !this.state[property],
    });
  };

  stuff = x => {
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

  handleSubmit = e => {
    alert('Submission');
  };

  addArrayElm = name => [...this.state.selected, name];

  removeArrayElm = name => {
    const copy = [...this.state.selected];
    const index = copy.findIndex(elm => elm === name);
    copy.splice(index, 1);
    return copy;
  };

  handleChange = event => {
    const { name } = event.target;

    if (event.target.checked) {
      this.setState({ selected: this.addArrayElm(name) });
    } else {
      this.setState({ selected: this.removeArrayElm(name) });
    }
  };

  async deleteExamples() {
    const data = this.state.selected;
    console.log(data);
    fetch('/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  render() {
    const { examples, editing } = this.state;
    const visible = editing ? 'visible' : 'hidden';
    return (
      <div>
        <br />
        <button onClick={e => this.toggle('editing')}>Edit</button>
        <br />
        <button onClick={this.deleteExamples} style={{ visibility: visible }}>
          Delete
        </button>
        <br />
        <form onSubmit={this.handleSubmit}>
          {examples.length ? (
            examples.map(elm => {
              return (
                <>
                  <br />
                  <input
                    type="checkbox"
                    name={elm.name}
                    style={{ visibility: visible }}
                    onChange={this.handleChange}
                  />
                  <label>{elm.name}</label>
                  <br />
                  <input
                    type="text"
                    name={elm.name}
                    id=""
                    placeholder={elm.name}
                    style={{ marginLeft: '20px', visibility: visible }}
                  />
                </>
              );
            })
          ) : (
            <h3>Loading</h3>
          )}
        </form>
      </div>
    );
  }
}
