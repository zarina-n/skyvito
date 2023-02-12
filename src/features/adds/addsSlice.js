import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adds: null,
}

const addsSlice = createSlice({
  name: 'adds',
  initialState: initialState,
  reducers: {
    getAdds: (state, action) => {
      state.adds = action.payload
    },
  },
})

export const { getAdds } = addsSlice.actions

export default addsSlice.reducer
