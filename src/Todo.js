import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

const Todo = (props) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary={props.todo}
          secondary="Dummy todo deadline"
        ></ListItemText>
      </ListItem>
      {/* <li>{}</li> */}
    </List>
  );
};

export default Todo;
