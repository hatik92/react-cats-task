import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { imgCategories } from "../../api/api"
import { RootState } from "../../app/store"
export type Categoty = {
  id: number
  name: string
}
export interface SideBar {
  categories: Categoty[]
}

const initialState: SideBar = {
  categories: []
}
export const getCategories = createAsyncThunk(
  'sidebar/categories',
  async () => {
    return await imgCategories.getCategories()
  }
)
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      const newCatrgory = {
        id: 45,
        name: action.payload
      }
      state.categories.push(newCatrgory)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
  }
})
export const {addCategory} = sidebarSlice.actions
export const selectCategories = (state: RootState) => state.sidebar.categories
export default sidebarSlice.reducer