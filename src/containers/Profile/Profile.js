import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileItem from '../ProfileItem/ProfileItem';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileList: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    var profileList = document.getElementById('profileList');
    profileList.scrollTo(0, profileList.scrollHeight);
  }

  PrintProfileList = () => {
    if (this.props.dulieu) {
      return this.props.dulieu.map((value, key) => {
        return (
          <ProfileItem key={key} id={value.id} class={value.class}>
            {value.name}
          </ProfileItem>
        );
      });
    }
  };

  addProfileList = () => {
    this.props.addProfileItem();
    this.setState({
      profileList: this.props.dulieu,
    });
  };

  render() {
    return (
      <div className="thx-drawer flex">
        <div className="main-title">Profile List</div>
        <div id="profileWrapper" className="drawer-select flex">
          <div id="profileList" className="scrollable">
            {this.PrintProfileList()}
            <input
              id="profileRename"
              className="profile-item"
              placeholder="Enter Profile Name"
              maxLength={25}
            />
          </div>
          <div className="toolbar flex">
            <div
              className="icon add"
              id="profileAdd"
              onClick={() => this.addProfileList()}
            />
            <div className="icon edit" id="profileEdit" />
            <div className="icon delete" id="profileDelete" />
            <div className="icon down" id="profileDown" />
            <div className="icon up disabled" id="profileUp" />
          </div>
          <div id="profileDelCfm" className="profile-del alert flex">
            <div className="title">delete eq</div>
            <div className="body-text t-center" id="delName">
              delete eq
            </div>
            <div className="thx-btn" id="cfmDelete">
              delete
            </div>
          </div>
        </div>
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
  var timestamp = new Date().getUTCMilliseconds(); // dummy div id
  return {
    addProfileItem: () => {
      dispatch({
        type: 'ADD_PROFILE_ITEM',
        newItem: {
          id: timestamp,
          name: 'New Profile',
          class: 'profile-item custom active',
        },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
