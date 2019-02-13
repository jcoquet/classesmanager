import React from 'react';

export default class ListClass extends React.Component {
  componentDidMount() {
    if (this.props.classesList.length < 1) {
      this.props.loadAllClasses();
    }
  }

  render() {
    if (this.props.classesList.length < 1) return null;

    return (
      <ul>
        {this.props.classesList.map(item => (
          <li key={item.id}>
            {item.id} {item.level}
          </li>
        ))}
      </ul>
    );
  }
}
