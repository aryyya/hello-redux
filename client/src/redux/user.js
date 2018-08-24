// action types

// action creators

// default state

const defaultState = {
  username: 'jane_smith',
  email: 'jane_smith@example.com',
  firstName: 'Jane',
  lastName: 'Smith'
}

// reducer

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
