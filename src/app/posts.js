import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  createPosts,
  updatePost,
  likePost,
  deletePost,
} from "../actions/posts";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload ? action.payload : post
        );
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
