import { getDataFromLS, saveDataToLS } from '../services/localStorage';
import { vietHoaChuCaiDau } from '../utils/fnUtil';
import { profileArr } from './data';
var arr = getDataFromLS();
var name = '';
var i = 0;

arr.forEach((e, index) => {
  if (e.class.includes('active')) {
    name = e.name;
    i = index;
  }
});

export const profileListState = {
  selectedItemContent: vietHoaChuCaiDau(name),
  isUp: i > 0 && i <= arr.length ? true : false,
  isDown: i < arr.length - 1 ? true : false,
  notAllowEdit: /profile[1-4]/.test(arr[i].id) ? true : false,
  openDeletePopup: false,
  openEditPopup: false,
  height: i * 30,
  profileArr: arr,
};
