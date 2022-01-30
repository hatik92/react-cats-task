import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { catImages } from "../../api/api";
import { Categoty } from "../Sidebar/SidebarSlice";

export interface CatImages {
  breeds: []
  categories: Categoty[]
  id: string
  url: string
  width: number
  height: number
}

const initialState = {
  iamges: [] as CatImages[],
  initialized: false
}

export const getImages = createAsyncThunk(
  'category/images',
  async (categoryId: number) => {
    return await catImages.getImages(categoryId)
  }
)

export const getMoreImages = createAsyncThunk(
  'category/moreImages',
  async (amout: {categoryId: number, page: number}) => {
    return await catImages.getMoreImages(amout.categoryId, amout.page)
  }
)

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.initialized = false
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.iamges = action.payload
        state.initialized = true
      })
      .addCase(getMoreImages.fulfilled, (state, action) => {
        state.iamges = state.iamges.concat(action.payload)
      })
  }
})


export default gallerySlice.reducer