import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./redux/categorySlice.jsx";
import channelSlice from "./redux/channelSlice.jsx";
import searchSlice from "./redux/searchSlice.jsx";
import videoSlice from "./redux/videoSlice.jsx";
import darkModeSlice from "./redux/darkModeSlice.jsx";

const store = configureStore({
  reducer: {
    category: categorySlice,
    channel: channelSlice,
    video: videoSlice,
    search: searchSlice,
    darkMode: darkModeSlice,
  },
});

export default store;