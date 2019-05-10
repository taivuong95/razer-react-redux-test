import { mapStateToProps, mapDispatchToProps } from './Profile';

describe('Profile', () => {
  it('should show initial value', () => {
    const initialState = {
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
    };

    // Just call the method directly passing in sample data
    // to make sure it does what it's supposed to
    expect(mapStateToProps(initialState).dulieu).toEqual([
      {
        class: 'profile-item active default no-edit',
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
    ]);
    expect(mapStateToProps(initialState).isUp).toBe(false);
  });

  it(' when button ADD is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).addProfileItem();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_PROFILE_ITEM' });
  });
  it(' when button UP is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).upProfileItem();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UP_PROFILE_ITEM' });
  });
  it(' when button DOWN is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).downProfileItem();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'DOWN_PROFILE_ITEM' });
  });

  it(' when button DOWN is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).downProfileItem();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'DOWN_PROFILE_ITEM' });
  });

  it(' when button OPEN DELETE is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).openDelete();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'OPEN_DELETE_POPUP' });
  });

  it(' when button CLODE DELETE is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).closeDelete();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CLOSE_DELETE_POPUP' });
  });

  it(' when button CLOSE EDIT is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).closeEdit();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CLOSE_EDIT_POPUP' });
  });

  it(' when button DELETE is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).deleteProfileItem();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'DELETE_PROFILE_ITEM' });
  });

  it(' when button RENAME_ONCHANGE is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).renameOnchange();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'RENAME_ONCHANGE' });
  });

  it(' when button RENAME HANDLER is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).onRenameHandler();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'RENAME_HANDLER' });
  });
});
