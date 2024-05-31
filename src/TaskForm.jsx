import { useState } from "react";
import PropType from "prop-types"

// punto 1
export const TaskForm = ({addTask}) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
          addTask(text);
          setText('');
        }
    };

  return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Nueva tarea"
    />
    <button type="submit">Agregar</button>
  </form>
  )
}

TaskForm.propTypes = {
    addTask: PropType.func
}

export default TaskForm;

