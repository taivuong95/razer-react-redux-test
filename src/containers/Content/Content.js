import React, { Component } from 'react';
import { connect } from 'react-redux';
class Content extends Component {
  render() {
    return (
      <div className="thx-window">
        <div className="sub-title flex">
          <h1 id="eqTitle" className="eq-title">
            {this.props.selectedItemContent}
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.profileArr,
    selectedItemContent: state.selectedItemContent,
  };
};

export default connect(mapStateToProps)(Content);
