import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";

const Todo = (props) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary={props.todo.todo}
          secondary="Dummy todo deadline"
        ></ListItemText>
      </ListItem>
      <DeleteForeverIcon
        onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
      ></DeleteForeverIcon>
      {/* <li>{}</li> */}
    </List>
  );
};

export default Todo;
