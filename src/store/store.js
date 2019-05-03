var redux = require('redux');

function vietHoaChuCaiDau(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const profileListState = {
  selectedItemContent: 'Default',
  isUp: false,
  isDown: true,
  notAllowEdit: true,
  openDeletePopup: false,
  openEditPopup: false,
  height: 0,
  profileArr: [
    {
      id: 'profile1',
      name: 'default',
      iconName: 'custom',
      class: 'profile-item active default no-edit',
    },
    {
      id: 'profile2',
      name: 'game',
      iconName: 'game',
      class: 'profile-item game no-edit',
    },
    {
      id: 'profile3',
      name: 'movie',
      iconName: 'movie',
      class: 'profile-item movie no-edit',
    },
    {
      id: 'profile4',
      name: 'music',
      iconName: 'music',
      class: 'profile-item music no-edit',
    },
    {
      id: 'custom1',
      name: 'Custom 1',
      iconName: 'custom',
      class: 'profile-item custom',
    },
    {
      id: 'custom2',
      name: 'demo long text demo long text',
      iconName: 'custom',
      class: 'profile-item custom',
    },
  ],
};
const reducer = (state = profileListState, action) => {
  switch (action.type) {
    case 'CHANGE_PROFILE_ITEM':
      console.log('Change PROFILE NE');
      var cloneProfileArr = [...state.profileArr];
      cloneProfileArr.forEach(e => {
        if (e.class.includes('active')) {
          e.class = e.class.replace('active', '').trim();
        }
      });

      let newActiveItem = cloneProfileArr.find(
        element => element.id.toUpperCase() === action.payload.toUpperCase()
      );
      let newActiveIndex = cloneProfileArr.findIndex(
        element => element.id.toUpperCase() === action.payload.toUpperCase()
      );

      let tempNewItem = {
        ...newActiveItem,
        class: newActiveItem.class + ' active',
      };

      cloneProfileArr.splice(newActiveIndex, 1, tempNewItem);

      return {
        ...state,
        notAllowEdit: /profile[1-4]/.test(newActiveItem.id) ? true : false,
        isUp:
          newActiveIndex > 0 && newActiveIndex <= cloneProfileArr.length
            ? true
            : false,
        isDown: newActiveIndex < cloneProfileArr.length - 1 ? true : false,
        selectedItemContent: action.content,
        profileArr: [...cloneProfileArr],
        height: newActiveIndex * 30,
      };

    case 'ADD_PROFILE_ITEM':
      console.log('ADD PROFILE NE');

      var newProfileArr = [...state.profileArr];
      newProfileArr.forEach(e => {
        if (e.class.includes('active')) {
          e.class = e.class.replace('active', '').trim();
        }
      });

      return {
        ...state,
        isUp: true,
        isDown: false,
        notAllowEdit: /profile[1-4]/.test(action.newItem.id) ? true : false,
        selectedItemContent: action.newItem.name,
        profileArr: [...newProfileArr, action.newItem],
        height: newProfileArr.length * 30,
      };

    case 'UP_PROFILE_ITEM':
      console.log('UP PROFILE NE');
      var updatedProfileArrAfterUp = [...state.profileArr];
      let oldPosition = updatedProfileArrAfterUp.findIndex(element =>
        element.class.includes('active')
      );
      let newPosition = oldPosition - 1;

      if (newPosition >= 0 && newPosition <= updatedProfileArrAfterUp.length) {
        // swap
        [
          updatedProfileArrAfterUp[oldPosition],
          updatedProfileArrAfterUp[newPosition],
        ] = [
          updatedProfileArrAfterUp[newPosition],
          updatedProfileArrAfterUp[oldPosition],
        ];

        state.notAllowEdit = /profile[1-4]/.test(
          updatedProfileArrAfterUp[newPosition].id
        )
          ? true
          : false;
      }

      return {
        ...state,
        notAllowEdit: state.notAllowEdit,
        isUp:
          newPosition > 0 && newPosition <= updatedProfileArrAfterUp.length
            ? true
            : false,
        isDown:
          newPosition < updatedProfileArrAfterUp.length - 1 ? true : false,
        profileArr: [...updatedProfileArrAfterUp],
      };

    case 'DOWN_PROFILE_ITEM':
      console.log('DOWN PROFILE NE');
      var updatedProfileArrAfterDown = [...state.profileArr];
      let oldPos = updatedProfileArrAfterDown.findIndex(element =>
        element.class.includes('active')
      );
      let newPos = oldPos + 1;

      if (newPos <= updatedProfileArrAfterDown.length - 1) {
        // // swap
        [
          updatedProfileArrAfterDown[oldPos],
          updatedProfileArrAfterDown[newPos],
        ] = [
          updatedProfileArrAfterDown[newPos],
          updatedProfileArrAfterDown[oldPos],
        ];

        state.notAllowEdit = /profile[1-4]/.test(
          updatedProfileArrAfterDown[newPos].id
        )
          ? true
          : false;
      }

      return {
        ...state,
        notAllowEdit: state.notAllowEdit,
        isUp:
          newPos > 0 && newPos <= updatedProfileArrAfterDown.length
            ? true
            : false,
        isDown: newPos < updatedProfileArrAfterDown.length - 1 ? true : false,
        profileArr: [...updatedProfileArrAfterDown],
      };

    case 'OPEN_DELETE_POPUP':
      return { ...state, openDeletePopup: true };

    case 'CLOSE_DELETE_POPUP':
      return { ...state, openDeletePopup: false };

    case 'OPEN_EDIT_POPUP':
      return { ...state, openEditPopup: true };

    case 'CLOSE_EDIT_POPUP':
      return { ...state, openEditPopup: false };

    case 'DELETE_PROFILE_ITEM':
      let lists = [...state.profileArr];
      let found = lists.findIndex(element => element.class.includes('active'));
      if (found === 0) lists[found - 1] = lists[found + 1];
      lists[found - 1].class = lists[found - 1].class + ' active';
      lists.splice(found, 1);
      return {
        ...state,
        profileArr: [...lists],
        notAllowEdit: /profile[1-4]/.test(lists[found - 1].id) ? true : false,
        selectedItemContent: vietHoaChuCaiDau(lists[found - 1].name),
        height: (lists.length - 1) * 30,
      };

    case 'RENAME_ONCHANGE':
      return { ...state, selectedItemContent: action.content };

    case 'RENAME_HANDLER':
      console.log(action.content);
      var updatedProfileArrAfterRename = [...state.profileArr];
      let element = updatedProfileArrAfterRename.find(element =>
        element.class.includes('active')
      );
      let position = updatedProfileArrAfterRename.findIndex(element =>
        element.class.includes('active')
      );

      let newELement = {
        ...element,
        name: action.content,
      };

      updatedProfileArrAfterRename.splice(position, 1, newELement);

      return {
        ...state,
        selectedItemContent: vietHoaChuCaiDau(action.content),
        profileArr: [...updatedProfileArrAfterRename],
      };

    default:
      return state;
  }
};

var store = redux.createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
