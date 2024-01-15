import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1>
        Get it Done!
      </motion.h1>
      <motion.div>
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
