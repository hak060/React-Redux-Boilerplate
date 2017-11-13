import React, { Component } from 'react';
import { connect } from 'react-redux';

//All component in the container is a class
//that renders some html
class FishDetail extends Component {

  render() {
    if (!this.props.user){
      return (<h4>Select a fish...</h4>);
    }
    return(
      <div>
        <img src={this.props.user.thumbnail} />
        <h2>{this.props.user.first}</h2>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>
    );
  }
}

//anytime we need to throw extra information like img
//use mapStateProps
function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(FishDetail);