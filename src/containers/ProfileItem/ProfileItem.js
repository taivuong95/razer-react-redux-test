import React, { Component } from 'react';
import { connect } from 'react-redux';
export class ProfileItem extends Component {
  render() {
    return (
      <div
        onClick={e => {
          this.props.changeProfileItem(e.target.id, e.target.innerText);
        }}
        id={this.props.id}
        className={this.props.class}
      >
        {this.props.children}
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.profileArr,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeProfileItem: (selectedItemContent, content) => {
      dispatch({
        type: 'CHANGE_PROFILE_ITEM',
        payload: selectedItemContent,
        content,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileItem);
