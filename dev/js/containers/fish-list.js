import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFish} from '../actions/selectFish';

class UserList extends Component {

  createListItems() {
    return this.props.users.map((user)=>{
      return (
        <li 
          key={user.id}
          onClick={() => this.props.selectFish(user)}
        >
          {user.first} {user.last}
        </li>
      );
    })
  }

  render() {
    return (
      <ul>
        {/* <li>one</li>
        <li>two</li>
        <li>three</li> */}
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

//dispatch: call a function
function matchDispatchToProps(dispatch) {
  // call selectUser in index.js
  return bindActionCreators({selectFish: selectFish}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);