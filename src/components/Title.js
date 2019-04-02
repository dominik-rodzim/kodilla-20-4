
import React from "react";
import style from "./Title.css";

const Title = props => 
    <div className={style.title}>
	    <h1>ToDo app</h1>
	    <p className={style.subtitle}>Active tasks: {props.data.length}</p>
    </div>

export default Title;