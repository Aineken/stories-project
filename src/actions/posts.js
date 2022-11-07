import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const { data } = await api.getPosts();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createPosts = createAsyncThunk(
  "posts/createPosts",
  async (post) => {
    try {
      const { data } = await api.createPost(post);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  try {
    const { data } = await api.updatePost(post);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const likePost = createAsyncThunk("posts/likePost", async (id) => {
  try {
    const { data } = await api.likePost(id);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",

  async (id) => {
    try {
      await api.deletePost(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
