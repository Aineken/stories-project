import axios from "axios";

const url = "https://memories-project-andrzul.herokuapp.com/posts";

export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (postToUpdate) =>
  axios.patch(`${url}/${postToUpdate._id}`, postToUpdate);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
