/** Created By ChrisWen
 *  Get User Infor
 *  17/12/05
 */
import { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { loadData } from '../../redux/user/action';
import { Toast } from 'antd-mobile';

class AuthRoute extends Component {
  componentDidMount () {
    const publicList = ['/login', '/register'];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    } else {
      axios.get('/users/info').then(response => {
        if (response.status === 200) {
          if (response.data.code === 0) {
            this.props.loadData(response.data);
          } else if (response.data.code === 1) {
            return Toast.fail(response.data.message, 2, () => {this.props.history.push('/login');});
          }
        }
      });
    }

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
    loadData: (data) => {dispatch(loadData(data));}
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));