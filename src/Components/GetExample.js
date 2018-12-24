import React, { Component } from 'react';

export default class GetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      examples: [],
      editing: false,
      selected: [],
      renaming: false,
      renamed: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteExamples = this.deleteExamples.bind(this);
    this.renameExamples = this.renameExamples.bind(this);
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

  handleSubmit = event => {
    alert('Submission');
    event.preventDefault();
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

  handleTextInputChange = event => {
    const { name, value } = event.target;
    const { renamed } = this.state;
    console.log(value);
    this.setState({ renamed: this.addArrayElm([name, value]) });
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

  async renameExamples() {
    const data = this.state.renamed;
    console.log(data);
    fetch('/rename', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  render() {
    const { examples, editing, renaming } = this.state;

    const editingVisibility = editing ? 'visible' : 'hidden';
    const hideOnRenaming = renaming ? 'none' : 'inline';
    const displayOnRenaming = renaming ? 'inline-block' : 'none';
    return (
      <div>
        <br />
        <button onClick={e => this.toggle('editing')}>Edit</button>
        <br />
        <button onClick={this.deleteExamples} style={{ visibility: editingVisibility }}>
          Delete
        </button>
        <button onClick={e => this.toggle('renaming')} style={{ visibility: editingVisibility }}>
          Rename
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
                    style={{ visibility: editingVisibility }}
                    onChange={this.handleChange}
                  />
                  <label style={{ display: hideOnRenaming }}>{elm.name}</label>
                  <br style={{ display: hideOnRenaming }} />
                  <input
                    type="text"
                    name={elm.name}
                    placeholder={elm.name}
                    style={{ marginLeft: '20px', display: displayOnRenaming }}
                    onChange={this.handleTextInputChange}
                  />
                  <button onClick={this.renameExamples} style={{ display: displayOnRenaming }}>
                    Update
                  </button>
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
