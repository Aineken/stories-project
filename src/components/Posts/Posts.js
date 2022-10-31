import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../app/posts";
import { CircularProgress, Grid } from "@mui/material";
import Post from "./Post/Post";
import classes from "./styles";

function Posts({ setCurrentId }) {
  const posts = useSelector(selectAllPosts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid sx={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
