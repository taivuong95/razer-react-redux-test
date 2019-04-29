var redux = require('redux');

const profileListState = {
  profileArr: [
    {
      id: 'profle1',
      name: 'default',
      class: 'profile-item active default no-edit',
    },
    { id: 'profle2', name: 'game', class: 'profile-item game no-edit' },
    { id: 'profle3', name: 'movie', class: 'profile-item movie no-edit' },
    { id: 'profle4', name: 'music', class: 'profile-item music no-edit' },
    { id: 'custom1', name: 'Custom 1', class: 'profile-item custom' },
    {
      id: 'custom2',
      name: 'demo long text demo long text',
      class: 'profile-item custom',
    },
  ],
};
const reducer = (state = profileListState, action) => {
  switch (action.type) {
    case 'CHANGE_PROFILE_ITEM':
      console.log('THAY DOI PROFILE NE');
      return state;

    case 'ADD_PROFILE_ITEM':
      console.log('ADD PROFILE NE');

      var newProfileArr = [...state.profileArr];
      newProfileArr.forEach(e => {
        if (e.class.includes('active')) {
          e.class = e.class.replace('active', '');
        }
      });
      var profileList = document.getElementById('profileList');
      profileList.scrollTo(0, profileList.scrollHeight);

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
