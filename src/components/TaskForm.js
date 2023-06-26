import React,{useState} from 'react'
import './../styles/taskForm.css';

function TaskForm(props) {
    const [inputText,setInputText] = useState({
        name:"",
        due:"",
        done:"false"
    });

    const onHandleChange = (e)=>{
        setInputText((prevState)=>{
           return  {...prevState,[e.target.name] : e.target.value}
        })
    }

  return (
    <div className="input-container">
      <input
        name = "name"
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputText.name || ""}
        onChange = {onHandleChange}
      />
      <label htmlFor='due'> Due Date</label>
      <input
        name = "due"
        type="date"
        className="input-box-todo"
        placeholder="Due date your todo"
        value={inputText.due || ""}
        onChange = {onHandleChange}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText({
            name:"",
            due:"",
            done:"false"
        })
      }}>+</button>      
    </div>
  )
}

export default TaskForm