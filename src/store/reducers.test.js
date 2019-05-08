import reducers from './reducers';
import { getDataFromLS } from '../services/localStorage';
import { capitalizeFirstLetterEachWord } from '../utils/fnUtil';
import {
  CHANGE_PROFILE_ITEM,
  ADD_PROFILE_ITEM,
  UP_PROFILE_ITEM,
  DOWN_PROFILE_ITEM,
  DELETE_PROFILE_ITEM,
  RENAME_ONCHANGE,
  RENAME_HANDLER,
  OPEN_DELETE_POPUP,
  CLOSE_DELETE_POPUP,
  OPEN_EDIT_POPUP,
  CLOSE_EDIT_POPUP,
} from './actions';
var timestamp = new Date().getMilliseconds(); // dummy div id
describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual({
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
    });
  });

  it('should handle ADD_PROFILE_ITEM', () => {
    expect(
      reducers([], {
        type: ADD_PROFILE_ITEM,
      })
    ).toEqual({
      height: 180,
      isDown: false,
      isUp: true,
      notAllowEdit: false,
      profileArr: [
        {
          class: 'profile-item  default no-edit',
          iconName: 'custom',
          id: 'profile1',
          name: 'default',
        },
        {
          class: 'profile-item game no-edit',
          iconName: 'game',
          id: 'profile2',
          name: 'game',
        },
        {
          class: 'profile-item movie no-edit',
          iconName: 'movie',
          id: 'profile3',
          name: 'movie',
        },
        {
          class: 'profile-item music no-edit',
          iconName: 'music',
          id: 'profile4',
          name: 'music',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom1',
          name: 'Custom 1',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom2',
          name: 'demo long text demo long text',
        },
        {
          class: 'profile-item custom active',
          iconName: 'custom',
          id: timestamp,
          name: 'New Profile',
        },
      ],
      selectedItemContent: 'New Profile',
    });
  });

  it('should handle CHANGE_PROFILE_ITEM', () => {
    expect(
      reducers([], {
        type: CHANGE_PROFILE_ITEM,
      })
    ).toEqual({
      selectedItemContent: 'New Profile',
      isUp: true,
      isDown: false,
      notAllowEdit: false,
      profileArr: getDataFromLS(),
      height: 7 * 30,
    });
  });

  it('should handle UP_PROFILE_ITEM', () => {
    expect(
      reducers([], {
        type: UP_PROFILE_ITEM,
      })
    ).toEqual({
      height: 150,
      isDown: true,
      isUp: true,
      notAllowEdit: false,
      profileArr: [
        {
          class: 'profile-item  default no-edit',
          iconName: 'custom',
          id: 'profile1',
          name: 'default',
        },
        {
          class: 'profile-item game no-edit',
          iconName: 'game',
          id: 'profile2',
          name: 'game',
        },
        {
          class: 'profile-item movie no-edit',
          iconName: 'movie',
          id: 'profile3',
          name: 'movie',
        },
        {
          class: 'profile-item music no-edit',
          iconName: 'music',
          id: 'profile4',
          name: 'music',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom1',
          name: 'Custom 1',
        },
        {
          class: 'profile-item custom active',
          iconName: 'custom',
          id: timestamp,
          name: 'New Profile',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom2',
          name: 'demo long text demo long text',
        },
      ],
    });
  });

  it('should handle DOWN_PROFILE_ITEM', () => {
    expect(
      reducers([], {
        type: DOWN_PROFILE_ITEM,
      })
    ).toEqual({
      height: 180,
      isDown: false,
      isUp: true,
      notAllowEdit: false,
      profileArr: [
        {
          class: 'profile-item  default no-edit',
          iconName: 'custom',
          id: 'profile1',
          name: 'default',
        },
        {
          class: 'profile-item game no-edit',
          iconName: 'game',
          id: 'profile2',
          name: 'game',
        },
        {
          class: 'profile-item movie no-edit',
          iconName: 'movie',
          id: 'profile3',
          name: 'movie',
        },
        {
          class: 'profile-item music no-edit',
          iconName: 'music',
          id: 'profile4',
          name: 'music',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom1',
          name: 'Custom 1',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom2',
          name: 'demo long text demo long text',
        },
        {
          class: 'profile-item custom active',
          iconName: 'custom',
          id: timestamp,
          name: 'New Profile',
        },
      ],
    });
  });

  it('should handle DELETE_PROFILE_ITEM', () => {
    expect(
      reducers([], {
        type: DELETE_PROFILE_ITEM,
      })
    ).toEqual({
      height: 150,
      isUp: true,
      notAllowEdit: false,
      profileArr: [
        {
          class: 'profile-item  default no-edit',
          iconName: 'custom',
          id: 'profile1',
          name: 'default',
        },
        {
          class: 'profile-item game no-edit',
          iconName: 'game',
          id: 'profile2',
          name: 'game',
        },
        {
          class: 'profile-item movie no-edit',
          iconName: 'movie',
          id: 'profile3',
          name: 'movie',
        },
        {
          class: 'profile-item music no-edit',
          iconName: 'music',
          id: 'profile4',
          name: 'music',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom1',
          name: 'Custom 1',
        },
        {
          class: 'profile-item custom active',
          iconName: 'custom',
          id: 'custom2',
          name: 'demo long text demo long text',
        },
      ],
      selectedItemContent: 'Demo Long Text Demo Long Text',
    });
  });

  it('should handle RENAME_ONCHANGE', () => {
    expect(
      reducers([], {
        type: RENAME_ONCHANGE,
      })
    ).toEqual({
      selectedItemContent: undefined,
    });
  });

  it('should handle RENAME_HANDLER', () => {
    expect(
      reducers([], {
        type: RENAME_HANDLER,
      })
    ).toEqual({
      height: 150,
      profileArr: [
        {
          class: 'profile-item  default no-edit',
          iconName: 'custom',
          id: 'profile1',
          name: 'default',
        },
        {
          class: 'profile-item game no-edit',
          iconName: 'game',
          id: 'profile2',
          name: 'game',
        },
        {
          class: 'profile-item movie no-edit',
          iconName: 'movie',
          id: 'profile3',
          name: 'movie',
        },
        {
          class: 'profile-item music no-edit',
          iconName: 'music',
          id: 'profile4',
          name: 'music',
        },
        {
          class: 'profile-item custom',
          iconName: 'custom',
          id: 'custom1',
          name: 'Custom 1',
        },
        {
          class: 'profile-item custom active',
          iconName: 'custom',
          id: 'custom2',
          name: undefined,
        },
      ],
      selectedItemContent: undefined,
    });
  });

  it('should handle OPEN_DELETE_POPUP', () => {
    expect(
      reducers([], {
        type: OPEN_DELETE_POPUP,
      })
    ).toEqual({
      openDeletePopup: true,
    });
  });

  it('should handle CLOSE_DELETE_POPUP', () => {
    expect(
      reducers([], {
        type: CLOSE_DELETE_POPUP,
      })
    ).toEqual({
      openDeletePopup: false,
    });
  });

  it('should handle OPEN_EDIT_POPUP', () => {
    expect(
      reducers([], {
        type: OPEN_EDIT_POPUP,
      })
    ).toEqual({
      openEditPopup: true,
    });
  });

  it('should handle CLOSE_EDIT_POPUP', () => {
    expect(
      reducers([], {
        type: CLOSE_EDIT_POPUP,
      })
    ).toEqual({
      openEditPopup: false,
    });
  });
});
