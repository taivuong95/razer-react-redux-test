var redux = require('redux');

const profileListState = {
  selectedItemContent: 'Default',
  isUp: false,
  isDown: true,
  profileArr: [
    {
      id: 'profle1',
      name: 'default',
      iconName: 'custom',
      class: 'profile-item active default no-edit',
    },
    {
      id: 'profle2',
      name: 'game',
      iconName: 'game',
      class: 'profile-item game no-edit',
    },
    {
      id: 'profle3',
      name: 'movie',
      iconName: 'movie',
      class: 'profile-item movie no-edit',
    },
    {
      id: 'profle4',
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
        isUp:
          newActiveIndex > 0 && newActiveIndex <= cloneProfileArr.length
            ? true
            : false,
        isDown: newActiveIndex < cloneProfileArr.length - 1 ? true : false,
        selectedItemContent: action.payload,
        profileArr: [...cloneProfileArr],
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
        profileArr: [...newProfileArr, action.newItem],
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
      }

      return {
        ...state,
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
      }

      return {
        ...state,
        isUp:
          newPos > 0 && newPos <= updatedProfileArrAfterDown.length
            ? true
            : false,
        isDown: newPos < updatedProfileArrAfterDown.length - 1 ? true : false,
        profileArr: [...updatedProfileArrAfterDown],
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
