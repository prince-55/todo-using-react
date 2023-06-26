import React, { useState } from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { AssignmentTurnedInTwoTone, EditTwoTone } from '@mui/icons-material';
import TaskItem from './TaskItem';
import './../styles/taskList.css';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TaskList(props) {
    const [edit, setEdit] = useState(false);
    const { listTodo } = props
    const { id, name, due, done } = props.item
    const handleStatus = () => {
        listTodo?.map((todo) => {
            if (todo.id == id) {
                todo.done = true;
            }
        })
    }
    return (
        <>
            {edit ? <TaskItem id={id} edit={edit} setEdit={setEdit} name={name} due={due} /> :
                (<><ul className="">
                    <Accordion sx={{ fontFamily: "Neucha" , width:"80%"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Due Date : {due}
                                <br/>
                                Status :  {JSON.parse(done) ? 'Completed' : 'Pending'}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {!JSON.parse(done) ? (<>
                        <span className='icons'>
                            <EditTwoTone color='success'
                                onClick={() => setEdit(true)}
                            />
                            <DeleteForeverOutlinedIcon
                                color='secondary'
                                onClick={e => {
                                    props.deleteItem(id)
                                }} />

                            <AssignmentTurnedInTwoTone color='primary'
                                onClick={handleStatus} />
                        </span>
                    </>) : <span className='completed-span'>Task Completed</span>
                    }
                </ul></>)}
        </>
    )
}

export default TaskList