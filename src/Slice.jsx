import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'
const initialState = {
  bookmark: []
}
export const bookmarkSlice = createSlice({
  name: 'bookmarklist',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const currentState = current(state).bookmark
      let arr = [...currentState, action.payload]
      arr = arr.filter((obj, index, self) => index === self.findIndex((o) => o._id === obj._id))
      console.log(arr)
      return {
        bookmark: arr
      }
    }
  }
})
export const { addBookmark } = bookmarkSlice.actions
export default bookmarkSlice.reducer
