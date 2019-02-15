import Component from './component';
import { connect } from 'react-redux';
import { getAllClasses } from '../../reducers/classes';
import { loadAllClasses, updateStudent } from '../../actions';
import { getAllStudents } from '../../reducers/students';

const mapStateToProps = state => ({
  classesList: getAllClasses(state),
  students: getAllStudents(state)
});

export default connect(
  mapStateToProps,
  { loadAllClasses, updateStudent }
)(Component);
