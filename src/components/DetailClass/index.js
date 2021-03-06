import Component from './component';
import { connect } from 'react-redux';
import { getAllStudents } from '../../reducers/students';
import { getClass } from '../../reducers/classes';
import { loadAllClasses } from '../../actions';

const mapStateToProps = (state, ownprops) => ({
  currentClass: getClass(state, ownprops.match.params.id),
  students: getAllStudents(state)
});

export default connect(
  mapStateToProps,
  { loadAllClasses }
)(Component);
