import React from 'react';

export default class DetailClass extends React.Component {
  componentDidMount() {
    if (this.props.classesList.length < 1) {
      //this.props.loadAllClasses();
    }
  }

  render() {
    //if (this.props.classesList.length < 1) return null;

    return 'coucou';
  }
}
