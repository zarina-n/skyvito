import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allAdds: null,
  currentAdd: null,
  search: null,
  users: null,
}

const addsSlice = createSlice({
  name: 'adds',
  initialState: initialState,
  reducers: {
    getAllAdds: (state, action) => {
      state.allAdds = action.payload
    },
    getCurrentAdd: (state, action) => {
      state.currentAdd = action.payload
    },
    getSearchValue: (state, action) => {
      state.search = action.payload
    },
    getUsers: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { getAllAdds, getCurrentAdd, getSearchValue, getUsers } =
  addsSlice.actions

export default addsSlice.reducer
