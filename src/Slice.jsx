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
    },
    removeBookmark: (state, action) => {
      const currentState = current(state).bookmark
      console.log(currentState)
      return {
        bookmark: currentState.filter((quote) => quote._id != action.payload)
      }
    }
  }
})
export const { addBookmark, removeBookmark } = bookmarkSlice.actions
export default bookmarkSlice.reducer
