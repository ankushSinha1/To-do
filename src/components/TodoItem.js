import { motion } from "framer-motion";
import React, { useRef } from "react";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);
  return (
    <motion.li
      
      key={item.id}
      className="card"
    >
      <div
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
      >{item.item}</div>
      <div className="btns">
        {item.completed === false && (
          <motion.button
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <IoClose />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
