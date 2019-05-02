import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileItem from '../ProfileItem/ProfileItem';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileList: [],
      count: 0,
    };
  }

  closeDropDownWhenClickOutSide = (args, fn) => {
    document.addEventListener('click', evt => {
      const flyoutElement = document.getElementById(args);
      let targetElement = evt.target; // clicked element
      do {
        if (targetElement == flyoutElement) {
          // Do nothing, just return.
          return;
        }
        // Go up the DOM.
        targetElement = targetElement.parentNode;
      } while (targetElement);
      fn();
    });
  };

  componentDidMount() {}

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
    var profileList = document.getElementById('profileList');
    profileList.scrollTo(0, profileList.scrollHeight);
  };

  render() {
    if (this.state.count === 1) {
      this.closeDropDownWhenClickOutSide('profileDelete', () => {
        this.props.closeDelete();
      });
    }
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
            <div
              className={
                this.props.notAllowEdit ? 'icon edit' : 'icon edit show'
              }
              id="profileEdit"
            />
            <div
              className={
                this.props.notAllowEdit ? 'icon delete' : 'icon delete show'
              }
              id="profileDelete"
              onClick={() => {
                this.props.openDelete();
                this.setState({
                  count: 1,
                });
              }}
            />
            <div
              className={this.props.isDown ? 'icon down' : 'icon down disabled'}
              id="profileDown"
              onClick={() => this.props.downProfileItem()}
            />
            <div
              className={this.props.isUp ? 'icon up' : 'icon up disabled'}
              id="profileUp"
              onClick={() => this.props.upProfileItem()}
            />
          </div>
          <div
            id="profileDelCfm"
            className={
              this.props.openDeletePopup
                ? 'profile-del alert flex show'
                : 'profile-del alert flex '
            }
          >
            <div className="title">delete eq</div>
            <div className="body-text t-center" id="delName">
              delete eq
            </div>
            <div
              className="thx-btn"
              id="cfmDelete"
              onClick={() => {
                this.props.deleteProfileItem();
                this.props.closeDelete();
              }}
            >
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
    isUp: state.isUp,
    isDown: state.isDown,
    notAllowEdit: state.notAllowEdit,
    openDeletePopup: state.openDeletePopup,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  var count = 0; // dummy div id
  return {
    addProfileItem: () => {
      count++;
      dispatch({
        type: 'ADD_PROFILE_ITEM',
        newItem: {
          id: 'new-profile-' + count,
          name: 'New Profile',
          iconName: 'custom',
          class: 'profile-item custom active',
        },
      });
    },
    upProfileItem: () => {
      dispatch({
        type: 'UP_PROFILE_ITEM',
      });
    },
    downProfileItem: () => {
      dispatch({
        type: 'DOWN_PROFILE_ITEM',
      });
    },
    openDelete: () => {
      dispatch({
        type: 'OPEN_DELETE_POPUP',
      });
    },
    closeDelete: () => {
      dispatch({
        type: 'CLOSE_DELETE_POPUP',
      });
    },
    deleteProfileItem: () => {
      dispatch({
        type: 'DELETE_PROFILE_ITEM',
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
