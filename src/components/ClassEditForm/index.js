import Component from './component';
import { connect } from 'react-redux';
import { updateClass } from '../../actions/index';

export default connect(
  null,
  { updateClass }
)(Component);
