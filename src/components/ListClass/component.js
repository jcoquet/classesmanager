import React from 'react';
import { Link } from 'react-router-dom';

export default class ListClass extends React.Component {
  componentDidMount() {
    if (Object.values(this.props.classesList).length < 1) {
      this.props.loadAllClasses();
    }
  }

  render() {
    if (Object.values(this.props.classesList).length < 1) return null;
    return (
      <ul>
        {Object.values(this.props.classesList).map(item => {
          return (
            <li key={item.id}>
              <Link to={`/classes/${item.id}`}>
                {item.name} ({item.level})
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
