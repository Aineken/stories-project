import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./styles";
import moment from "moment";
import { MoreHoriz, ThumbUpAlt, Delete } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();

  return (
    <Card sx={classes.card}>
      <CardMedia
        sx={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div style={classes.overlay}>
        <Typography variant="h6" sx={{ pr: 5 }}>
          {post.creator}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={classes.overlay2}>
        <Button
          sx={{ color: "white" }}
          size="lg"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div style={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.length ? "hello worlds" : post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography sx={classes.title} gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={classes.cardActions} display="flex">
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAlt fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <Delete fontSize="small" /> &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
