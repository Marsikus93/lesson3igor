import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import {Button} from "./Button";

type TodoListTypeProps = {
    title: string
    tasks: Array<TaskPropsType>
    removeTasks: (taskId: string) => void
    filterTasks:(filterKey:string)=>void
    addTask:(inputWords:string)=>void
}


export type TaskPropsType = {
    id: string,
    title: string,
    isDone: boolean
}
export type FilterType= "All"|"Active"|"Completed"
export function TodoList (props: TodoListTypeProps) {
    let [inputNewWords,setInputNewWords]=useState('')
    const mappedTasks=props.tasks.map((el) => {

        return (
            <li key={el.id}>
                <Button buttonName={'x'} callBack={()=>props.removeTasks(el.id)}/>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })






    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setInputNewWords(event.currentTarget.value)
    }
    const addTaskHandler=(()=>{
        props.addTask(inputNewWords)
        setInputNewWords('')
    })
    const onKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==="Enter"){
            addTaskHandler()
        }
    }
    const changeFilterTsarHandler=(filterValue:FilterType)=>{
        props.filterTasks(filterValue)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onChange={onChangeHandler} value={inputNewWords} onKeyDown={onKeyDownHandler}/>
                <Button buttonName={"+"} callBack={addTaskHandler}/>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <Button buttonName={"All"} callBack={()=>changeFilterTsarHandler("All")}/>
                <Button buttonName={"Active"} callBack={()=>changeFilterTsarHandler("Active")}/>
                <Button buttonName={"Completed"} callBack={()=>changeFilterTsarHandler("Completed")}/>

            </div>
        </div>
    )
}