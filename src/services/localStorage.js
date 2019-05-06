import { profileArr } from '../models/data';
export const getDataFromLS = () => {
  if (typeof Storage !== 'undefined') {
    return (
      JSON.parse(localStorage.getItem('profileArr')) || saveDataToLS(profileArr)
    );
  } else {
    console.log('a');
  }
};

export const saveDataToLS = currentArr => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('profileArr', JSON.stringify(currentArr));
  } else {
    // Sorry! No Web Storage support..
  }
};
