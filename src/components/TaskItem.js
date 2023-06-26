import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { todoContext } from '../context/TodoContext';

export default function TaskItem({edit, setEdit, id, name, due}) {
const { listTodo} = React.useContext(todoContext)
const [inputText, setInputText] = React.useState({
    name:name,
    due:due,
    done:false,
})
  const handleClose = () => {
    setEdit(false);
  };

  const handleChange = (e)=>{
    setInputText((prevState)=>{
       return  {...prevState,[e.target.name] : e.target.value}
    })
}
  const handleUpdate = ()=>{
        listTodo?.map((item) => {
            if(item.id == id){
                item.name = inputText.name;
                item.due = inputText.due;
            }
        });
        setEdit(false);
  }

  return (
    <div>
      <Dialog open={edit} onClose={handleClose} maxWidth='xl'>
        <DialogTitle>Edit Your task</DialogTitle>
        <DialogContent>
          <h4>Todo</h4>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            value={inputText.name}
            onChange={handleChange}
            type="input"
            fullWidth
            variant="standard"
          />
          <h4>Due Date</h4>
          <TextField
            margin="dense"
            id="date"
            name="due"
            value={inputText.due}
            onChange={handleChange}
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}