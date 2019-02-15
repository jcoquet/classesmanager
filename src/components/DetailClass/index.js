import Component from './component';
import { connect } from 'react-redux';
import { getAllClasses } from '../../reducers/classes';
import { loadAllClasses } from '../../actions';

const mapStateToProps = state => ({
  classesList: getAllClasses(state)
});

export default connect(
  mapStateToProps,
  { loadAllClasses }
)(Component);
