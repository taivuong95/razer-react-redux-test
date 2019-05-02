import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProfileItem extends Component {
  render() {
    return (
      <div
        onClick={e => {
          this.props.changeProfileItem(e.target.id);
        }}
        id={this.props.id}
        className={this.props.class}
      >
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.profileArr,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeProfileItem: selectedItemContent => {
      dispatch({
        type: 'CHANGE_PROFILE_ITEM',
        payload: selectedItemContent,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileItem);
