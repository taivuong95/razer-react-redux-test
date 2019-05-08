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
var timestamp = new Date().getUTCMilliseconds(); // dummy div id
var arr = getDataFromLS();
var name = 'Default';
var i = 0;
if (typeof arr !== 'undefined') {
  arr.forEach((e, index) => {
    if (e.class.includes('active')) {
      name = e.name;
      i = index;
    }
  });
}
describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      selectedItemContent: 'Default',
      isUp: false,
      isDown: true,
      notAllowEdit: true,
      openDeletePopup: false,
      openEditPopup: false,
      height: 30,
      profileArr: getDataFromLS(),
    });
  });

  it('should handle ADD_PROFILE_ITEM', () => {
    expect(
      reducers([], {
        type: ADD_PROFILE_ITEM,
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

  // it('should handle CHANGE_PROFILE_ITEM', () => {
  //   expect(
  //     reducers([], {
  //       type: CHANGE_PROFILE_ITEM,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //   });
  // });

  // it('should handle UP_PROFILE_ITEM', () => {
  //   expect(
  //     reducers([], {
  //       type: UP_PROFILE_ITEM,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //   });
  // });

  // it('should handle DOWN_PROFILE_ITEM', () => {
  //   expect(
  //     reducers([], {
  //       type: DOWN_PROFILE_ITEM,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //   });
  // });

  // it('should handle DELETE_PROFILE_ITEM', () => {
  //   expect(
  //     reducers([], {
  //       type: DELETE_PROFILE_ITEM,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //   });
  // });

  // it('should handle RENAME_ONCHANGE', () => {
  //   expect(
  //     reducers([], {
  //       type: RENAME_ONCHANGE,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //   });
  // });

  // it('should handle RENAME_HANDLER', () => {
  //   expect(
  //     reducers([], {
  //       type: RENAME_HANDLER,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //   });
  // });

  // it('should handle OPEN_DELETE_POPUP', () => {
  //   expect(
  //     reducers([], {
  //       type: OPEN_DELETE_POPUP,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //     openDeletePopup: true,
  //   });
  // });

  // it('should handle CLOSE_DELETE_POPUP', () => {
  //   expect(
  //     reducers([], {
  //       type: CLOSE_DELETE_POPUP,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //     openDeletePopup: false,
  //   });
  // });

  // it('should handle OPEN_EDIT_POPUP', () => {
  //   expect(
  //     reducers([], {
  //       type: OPEN_EDIT_POPUP,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //     openEditPopup: true,
  //   });
  // });

  // it('should handle CLOSE_EDIT_POPUP', () => {
  //   expect(
  //     reducers([], {
  //       type: CLOSE_EDIT_POPUP,
  //     })
  //   ).toEqual({
  //     selectedItemContent: 'New Profile',
  //     isUp: true,
  //     isDown: false,
  //     notAllowEdit: false,
  //     profileArr: getDataFromLS(),
  //     height: 7 * 30,
  //     openEditPopup: false,
  //   });
  // });
});
