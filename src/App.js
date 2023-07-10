import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {title: "Buy Shopping", isPrio: "high"},
    {title: "Clean Bathroom", isPrio: "low"},
    {title: "Cars MOT", isPrio: "high"},
    
  ])
  const [newTask, setNewTask] = useState("");
  const [prio , setNewPrio] = useState()
  
  const taskNodes = tasks.map(function(task, index){
    return (
      <li key = {index} className ={task.isPrio=== "high" ? "prio" : "not-prio"}>
        <span>
          {task.title}
        </span>
        {task.isPrio ==="high" ? <span className="prio">High Priority !</span> : <span className = "not-prio">Not Rushing</span>}
      </li>
    )
  })
  const handleTaskInput = function(event) {
    const value = event.target.value;
    setNewTask(value);
  };
  const handleTaskPrio = function(event){
    const value = event.target.value
    setNewPrio(value)
  }
  const handleFormSubmit = function(event){
    event.preventDefault();
    const task = {
      title: newTask,
      isPrio: prio
    };
    const copyTasks = [...tasks]
    copyTasks.push(task);

    setTasks(copyTasks);
    setNewTask("");

  }
  return (
    <div className="App">
      <h1>My ToDo List !</h1>
      
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new-task"></label>
        <input id="new-task" type = "text" value={newTask} onChange={handleTaskInput}/>
        <label htmlFor="new-prio">High</label>
        <input id="high" type = "radio" value="high" name="priority"onChange={handleTaskPrio}/>
        <label htmlFor="new-prio">Low</label>
        <input id="low" type = "radio" value ="low" name="priority"onChange={handleTaskPrio}/>

        <input type="submit" value ="Save new Task" />
      </form>
      <ul>
        {taskNodes}
      </ul>
    </div>
  );
}

export default App;
