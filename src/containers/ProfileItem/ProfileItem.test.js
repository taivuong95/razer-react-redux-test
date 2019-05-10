import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mapStateToProps, mapDispatchToProps } from './ProfileItem';
import ProfileItem from './ProfileItem';
// test mapStateToProps and mapDispatchToProps
describe('ProfileItem', () => {
  it('should show initial value', () => {
    const initialState = {
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

    // Just call the method directly passing in sample data
    // to make sure it does what it's supposed to
    expect(mapStateToProps(initialState).dulieu).toEqual([
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
    ]);
  });

  it('should roll the dice again when button is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).changeProfileItem();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CHANGE_PROFILE_ITEM' });
  });
});

//
