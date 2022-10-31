import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import { fetchPosts } from "./actions/posts";
import classes from "./styles.js";
import memories from "./images/andrzul_logo.svg";
import Form from "./components/Form/Form.js";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar sx={classes.appBar} position="static" color="inherit">
        <Typography sx={{ color: "black" }} variant="h2">
          Stories
        </Typography>

        <img
          style={{ marginLeft: "15px" }}
          src={memories}
          alt="icon"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
