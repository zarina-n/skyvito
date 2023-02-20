import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allAdds: null,
  currentAdd: null,
  search: null,
  users: null,
  currentAddImages: null,
  userAdds: null,
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
    setCurrentAddImages: (state, action) => {
      state.currentAddImages = action.payload
    },
    setUserAdds: (state, action) => {
      state.userAdds = action.payload
    },
  },
})

export const {
  getAllAdds,
  getCurrentAdd,
  getSearchValue,
  getUsers,
  setCurrentAddImages,
  setUserAdds,
} = addsSlice.actions

export default addsSlice.reducer
