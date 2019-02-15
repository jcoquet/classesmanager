import React from 'react';
import { Link } from 'react-router-dom';

export default class ListClass extends React.Component {
  componentDidMount() {
    if (Object.values(this.props.students).length < 1) {
      this.props.loadAllClasses();
    }
  }

  render() {
    if (Object.values(this.props.students).length < 1) return null;

    const { currentClass } = this.props;

    const students = Object.values(this.props.students).filter(item => {
      return currentClass.students.indexOf(item.id) !== -1;
    });

    return (
      <ul>
        {students.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/students/${item.id}`}>
                {item.lastname} {item.firstname}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
