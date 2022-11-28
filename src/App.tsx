import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, TodoList} from "./TodoList";
import {v1} from "uuid";

function App() {
  let currentTitle = "what to learn1"
  let [tasks1, setTasks1] = useState(
      [
        {id: v1(), title: "HTML and CSS", isDone: true},//0
        {id: v1(), title: "JS", isDone: true},//1
        {id: v1(), title: "react", isDone: false},//2
      ]
  )
  const addTask=(inputWords:string)=> {
    const newTask2: TaskPropsType = {id: v1(), title: inputWords, isDone: false}
    setTasks1([newTask2, ...tasks1])
  }
  const [filterValueKey, setFilterValueKey] = useState("All")

  const removeTask = (taskId: string) => {
    setTasks1(tasks1.filter(el => el.id !== taskId))
  }

  const filterTasks = (filterKey: string) => {
    setFilterValueKey(filterKey)
  }
  const fooFilter=()=>{
    let filteredTasks = tasks1
    if (filterValueKey === 'Active') {
      return    filteredTasks = tasks1.filter(el => el.isDone)
    }
    if (filterValueKey === 'Completed') {
      return filteredTasks = tasks1.filter(el => !el.isDone)
    }
    return filteredTasks
  }

  return (
      <div className="App">
        <TodoList title={currentTitle}
                  tasks={fooFilter()}
                  removeTasks={removeTask}
                  filterTasks={filterTasks}
                  addTask={addTask}
        />
      </div>
  );
}

export default App;
