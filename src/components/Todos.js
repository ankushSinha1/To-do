import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        className="todo-input"
        placeholder="Add new task"
        value={todo}
      />
      <button className="add-btn"onClick={() => add()}> Add</button>
      <br />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {todos: state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
