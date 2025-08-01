import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../utils/Fetch.jsx";
import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com";

const initialState = {
  selectedCategory: "Home",
  categoryVideos: [],
  isLoading: false,
  sidebarExtend: false,
};

export const getCategoryVideos = createAsyncThunk(
  "redux/categorySlice",
  async (url) => {
    try {
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setSidebarExtendedValue: (state, { payload }) => {
      state.sidebarExtend = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryVideos.fulfilled, (state, { payload }) => {
        state.categoryVideos = payload;
        state.isLoading = false;
      })
      .addCase(getCategoryVideos.rejected, (state) => {
        state.isLoading = false;
        state.categoryVideos = [];
      });
  },
});

export const { setSelectedCategory, setSidebarExtendedValue } = categorySlice.actions;
export default categorySlice.reducer;