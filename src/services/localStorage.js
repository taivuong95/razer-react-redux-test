import { profileArr } from '../models/data';
export const getDataFromLS = () => {
  return (
    JSON.parse(localStorage.getItem('profileArr')) || saveDataToLS(profileArr)
  );
};

export const saveDataToLS = currentArr => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('profileArr', JSON.stringify(currentArr));
  } else {
    // Sorry! No Web Storage support..
  }
};
