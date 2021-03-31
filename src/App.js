import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import firebase from "firebase";
import "./App.css";
import Todos from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    //fires when the appjs load
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((item) => item.data()));
        //reading the data and puts in the nice format
        setTodos(snapshot.docs.map((item) => item.data().todo));
      });
  }, []);

  const addToDo = (e) => {
    //this will fire off when user clicks the button
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello from react</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addToDo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((item) => (
          <Todos todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
