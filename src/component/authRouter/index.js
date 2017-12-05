/** Created By ChrisWen
 *  Get User Infor
 *  17/12/05
 */
import { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadData } from '../../redux/user/action';

class AuthRoute extends Component {
  constructor (props) {
    super(props);
    const { isAuth } = this.props.user;
    if (!isAuth) {
      this.props.history.push('/login');
    }
  }
  componentDidMount () {
    const publicList = ['/login', '/register'];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {return null;}
    // Get User Infor
    this.props.loadData();
  }
  render () {
    return null;
  }
}
function mapStateToProps (state) {
  return {
    user: state.user
  };
}
function mapDispatchToProps (dispatch, ownProps) {
  return {
    loadData: () => {dispatch(loadData());}
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));