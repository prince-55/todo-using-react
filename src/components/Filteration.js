import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Filteration({listTodo, setFilteredList}) {
    const handleSelect = (e)=>{
        let updated = []
        if(e.target.value == 'completed'){
            updated = listTodo?.filter((list)=>list.done == true)
        }
        if (e.target.value == 'pending'){
            updated = listTodo?.filter((list)=>list.done == 'false')
        }else if(e.target.value == 'all'){
            updated = [...listTodo]
        }
        else if(e.target.value == 'date'){
            updated = listTodo?.sort((a,b)=> Date.parse(b.due) - Date.parse(a.due)); 
        }
        setFilteredList([...updated])
    }
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className="filter-label">Filter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className='radio-class'
        defaultValue="all"
      >
        <FormControlLabel value="all" control={<Radio onChange={handleSelect}/>} label="All Todos" />
        <FormControlLabel value="completed" control={<Radio onChange={handleSelect}/>} label="Completed Task"  />
        <FormControlLabel value="pending" control={<Radio onChange={handleSelect}/>} label="Pending" />
        <FormControlLabel value="date" control={<Radio onChange={handleSelect}/>} label="Date" />
      </RadioGroup>
    </FormControl>
  )
}

export default Filteration