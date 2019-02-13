import Component from './component';
import { connect } from 'react-redux';
import { addClass } from '../../actions/index';

export default connect(
  null,
  { addClass }
)(Component);
