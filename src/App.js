import './App.css';
import { useContext, useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { todoContext } from './context/TodoContext';
import { v4 as uuidv4 } from 'uuid'
import Filteration from './components/Filteration';

function App() {
  // data is stored and managed thru the contextApi 
  const { listTodo, setListTodo } = useContext(todoContext)
  const [filteredList, setFilteredList] = useState([...listTodo]);
  useEffect(() => {
    setFilteredList(listTodo)
  }, [listTodo])

  // to add the new todo in the listTodo
  let addList = (inputText) => {
    if (inputText.name !== "") {
      setListTodo([...listTodo, { id: uuidv4(), ...inputText }])
    }

  }

  // to delete the todo
  const deleteListItem = (key) => {
    let newListTodo = listTodo.filter(((list) => list.id !== key))
    setListTodo([...newListTodo])
  }
  return (
    <div className="App">
      <h1 className="app-heading">TODO</h1>
      <TaskForm addList={addList} />

      {/* // filter using differnt parameters */}
      <Filteration listTodo={listTodo} setFilteredList={setFilteredList} />

      {/*  This component displays the list of all todos */}
      <div className='list-container'>
        {filteredList?.map((listItem, i) => {
          return (
            <TaskList key={listItem.id} index={i} item={listItem} deleteItem={deleteListItem} listTodo={listTodo} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
