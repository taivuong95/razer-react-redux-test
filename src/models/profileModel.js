import { getDataFromLS } from '../services/localStorage';
import { capitalizeFirstLetterEachWord } from '../utils/fnUtil';

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

export const profileListState = {
  selectedItemContent: capitalizeFirstLetterEachWord(name),
  isUp: i > 0 && i <= getDataFromLS().length ? true : false,
  isDown: i < getDataFromLS().length - 1 ? true : false,
  notAllowEdit: /profile[1-4]/.test(getDataFromLS()[i].id) ? true : false,
  openDeletePopup: false,
  openEditPopup: false,
  height: i * 30,
  profileArr: getDataFromLS(),
};
