    
import React from "react";
import style from "./TodoList.css";
import Todo from "./Todo";

const TodoList = props => {
	console.log(props);
  const singleTask = props.data.map(taskData => <Todo id={taskData.id} text={taskData.text} remove={props.remove} />);
  
  return <ul>{singleTask}</ul>;
};

export default TodoList;