import React from 'react';

export default class NewClass extends React.Component {
  state = {
    val: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ val: '' });
    this.props.addClass(this.state.val);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <select
          required
          value={this.state.val}
          onChange={e => this.setState({ val: e.target.value })}
        >
          <option value="" />
          <option>cp</option>
          <option>ce1</option>
          <option>ce2</option>
          <option>cm1</option>
          <option>cm2</option>
        </select>
        <button>Nouvelle classe</button>
      </form>
    );
  }
}
