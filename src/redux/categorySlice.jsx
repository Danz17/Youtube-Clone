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
      // Return mock data when API fails
      return [
        {
          id: { videoId: "demo1" },
          snippet: {
            title: "Demo Video - React Tutorial for Beginners",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/ff6b6b/ffffff?text=React+Tutorial"
              }
            },
            channelTitle: "Code Academy",
            channelId: "demo-channel-1",
            publishedAt: new Date().toISOString(),
            description: "Learn React from scratch with this comprehensive tutorial."
          }
        },
        {
          id: { videoId: "demo2" },
          snippet: {
            title: "JavaScript ES6 Features Explained",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/4ecdc4/ffffff?text=JavaScript+ES6"
              }
            },
            channelTitle: "JS Mastery",
            channelId: "demo-channel-2",
            publishedAt: new Date().toISOString(),
            description: "Master modern JavaScript with ES6 features and syntax."
          }
        },
        {
          id: { videoId: "demo3" },
          snippet: {
            title: "CSS Grid Layout Complete Guide",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/45b7d1/ffffff?text=CSS+Grid"
              }
            },
            channelTitle: "Web Dev Simplified",
            channelId: "demo-channel-3",
            publishedAt: new Date().toISOString(),
            description: "Everything you need to know about CSS Grid layout."
          }
        },
        {
          id: { videoId: "demo4" },
          snippet: {
            title: "Node.js Backend Development",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/96ceb4/ffffff?text=Node.js+Backend"
              }
            },
            channelTitle: "Backend Mastery",
            channelId: "demo-channel-4",
            publishedAt: new Date().toISOString(),
            description: "Build powerful backend applications with Node.js."
          }
        },
        {
          id: { videoId: "demo5" },
          snippet: {
            title: "MongoDB Database Tutorial",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/feca57/ffffff?text=MongoDB+Tutorial"
              }
            },
            channelTitle: "Database Pro",
            channelId: "demo-channel-5",
            publishedAt: new Date().toISOString(),
            description: "Learn MongoDB database from basics to advanced concepts."
          }
        },
        {
          id: { videoId: "demo6" },
          snippet: {
            title: "TypeScript for React Developers",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/ff9ff3/ffffff?text=TypeScript+React"
              }
            },
            channelTitle: "TypeScript Academy",
            channelId: "demo-channel-6",
            publishedAt: new Date().toISOString(),
            description: "Add type safety to your React applications with TypeScript."
          }
        }
      ];
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