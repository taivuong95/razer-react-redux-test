var redux = require('redux');

const profileListState = {
  selectedItemContent: 'Default',
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
      let newIndex = cloneProfileArr.findIndex(
        element => element.id.toUpperCase() === action.payload.toUpperCase()
      );

      let tempNewItem = {
        ...newActiveItem,
        class: newActiveItem.class + ' active',
      };

      cloneProfileArr.splice(newIndex, 1, tempNewItem);

      return {
        ...state,
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

    default:
      return state;
  }
};

var store = redux.createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
