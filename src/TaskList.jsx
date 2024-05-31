import PropType from 'prop-types'

// punto 2
export const TaskList = ({tasks, deleteTask}) => {
  return (
    <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        {task.text}
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </li>
    ))}
  </ul>
  );
}

TaskList.propTypes = {
    tasks: PropType.array.isRequired,
    deleteTask: PropType.func
}

export default TaskList;