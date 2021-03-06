import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileItem from '../ProfileItem/ProfileItem';
import { getDataFromLS } from '../../services/localStorage';
import { autoSave } from '../../utils/fnUtil';
let profileList = React.createRef();
export class Profile extends Component {
  // textInput must be declared here so the ref can refer to it

  constructor(props) {
    super(props);

    this.state = {
      profileList: [],
    };
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentDidMount() {
  //   var profileList = document.getElementById('profileList');
  //   profileList.scrollTo(0, this.props.height);
  // }

  closeDropDownWhenClickOutSide = (args, fn) => {
    document.addEventListener('click', evt => {
      const flyoutElement = document.getElementById(args);
      let targetElement = evt.target; // clicked element

      do {
        if (targetElement === flyoutElement) {
          // Do nothing, just return.
          return;
        }
        // Go up the DOM.
        targetElement = targetElement.parentNode;
      } while (targetElement);
      fn();
    });
  };

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
    var profileList = document.getElementById('profileList');
    profileList.scrollTo(0, this.props.height);
  };

  onRenameClicked = () => {
    this.props.openEdit();
  };

  componentDidUpdate(prevProps, prevState) {
    let selectedItem = document.getElementById('profileRename');
    selectedItem.value = this.props.selectedItemContent;
    selectedItem.focus(); // focus for rename field

    this._input.focus(); // focus for delete button

    var profileList = document.getElementById('profileList');
    profileList.scrollTo(0, this.props.height);
  }

  handleFocus = e => {
    e.target.select();
  };

  // handleChange = e => {
  //   console.log(e.target.value);
  // };

  render() {
    return (
      <div className="thx-drawer flex">
        <div className="main-title">Profile List</div>
        <div id="profileWrapper" className="drawer-select flex">
          <div id="profileList" className="scrollable" ref={profileList}>
            {this.PrintProfileList()}
            <input
              id="profileRename"
              className={
                this.props.openEditPopup ? 'profile-item show' : 'profile-item'
              }
              style={{ top: this.props.height.toString() + 'px' }}
              placeholder="Enter Profile Name"
              maxLength={25}
              autoFocus
              onFocus={e => this.handleFocus(e)}
              ref={input => (this._input = input)}
              onChange={e => this.props.renameOnchange(e.target.value)}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  this.props.onRenameHandler(e.target.value);
                  this.props.closeEdit();
                }
              }}
              onBlur={e => {
                this.props.onRenameHandler(e.target.value);
                this.props.closeEdit();
              }}
              tabIndex="0"
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
              onClick={() => this.onRenameClicked()}
            />
            <div
              className={
                this.props.notAllowEdit ? 'icon delete' : 'icon delete show'
              }
              id="profileDelete"
              onClick={() => {
                this.props.openDelete();
              }}
            />
            <div
              className={this.props.isDown ? 'icon down' : 'icon down disabled'}
              id="profileDown"
              onClick={() => {
                this.props.downProfileItem();
              }}
            />
            <div
              className={this.props.isUp ? 'icon up' : 'icon up disabled'}
              id="profileUp"
              onClick={() => {
                this.props.upProfileItem();
              }}
            />
          </div>
          <div
            id="profileDelCfm"
            className={
              this.props.openDeletePopup
                ? 'profile-del alert flex show'
                : 'profile-del alert flex '
            }
            onBlur={() => this.props.closeDelete()}
            tabIndex="0"
            ref={c => (this._input = c)}
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
                this.props.closeEdit();
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

export const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.profileArr,
    isUp: state.isUp,
    isDown: state.isDown,
    notAllowEdit: state.notAllowEdit,
    openDeletePopup: state.openDeletePopup,
    openEditPopup: state.openEditPopup,
    selectedItemContent: state.selectedItemContent,
    height: state.height,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProfileItem: () => {
      dispatch({
        type: 'ADD_PROFILE_ITEM',
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
    openEdit: () => {
      dispatch({
        type: 'OPEN_EDIT_POPUP',
      });
    },
    closeEdit: () => {
      dispatch({
        type: 'CLOSE_EDIT_POPUP',
      });
    },
    deleteProfileItem: () => {
      dispatch({
        type: 'DELETE_PROFILE_ITEM',
      });
    },
    renameOnchange: content => {
      dispatch({
        type: 'RENAME_ONCHANGE',
        content,
      });
    },
    onRenameHandler: content => {
      dispatch({
        type: 'RENAME_HANDLER',
        content,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
