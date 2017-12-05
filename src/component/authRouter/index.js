/** Created By ChrisWen
 *  Get User Infor
 *  17/12/05
 */
import { Component }from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AuthRoute extends Component {
  componentDidMount(){
    const publicList = ['/login', '/register'];
    const pathname = this.props.location.pathname;
    if(publicList.indexOf(pathname) > -1){return null;}
    // Get User Infor
    axios.get('/users/info').then(response => {
      if(response.status === 200){
        if(response.data.code === 0){}else{
          console.log(this.props.history);
          this.props.history.push('/login');
        }
        console.log(response.data);
      }
    });
  }
  render(){
    return null;
  }
}

export default withRouter(AuthRoute);