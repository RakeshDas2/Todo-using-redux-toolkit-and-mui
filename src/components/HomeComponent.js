import { Alert, Box, Button, Container, Paper, Snackbar, TextField, Typography } from '@mui/material';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, editSnackBar } from '../redux/reducers/listSlice';

function HomeComponent() {
    const recivedData = useSelector(state => state.finalData)
    const dispatch = useDispatch()


    const [todoData, setTodoData] = useState({
        task: '',
        completed: false
    })

    const updataTask = (e) => {
        const dataCopy = { ...todoData }
        dataCopy[e.target.name] = e.target.value
        setTodoData(dataCopy)
    }

    const addDataToFinalData = () => {
        if (todoData.task !== '') {
            dispatch(addData(todoData))
            setTodoData({
                task: '',
                completed: false
            })
        }

    }



    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    // const handleClick = (newState) => () => {
    //     setState({ open: true, ...newState });
    // };

    const handleClose = () => {
        dispatch(editSnackBar())
    };

    // const buttons = (
    //     <React.Fragment>
    //         <Button
    //             onClick={handleClick({
    //                 vertical: 'top',
    //                 horizontal: 'center',
    //             })}
    //         >
    //             Top-Center
    //         </Button>
    //     </React.Fragment>
    // );




    return (
        <>
            <Container>
                <Paper component={Box} style={{ width: '50%', marginLeft: '20%', marginTop: '10%' }}>
                    <Typography variant='h3'>Todo App</Typography>
                    <TextField
                        fullWidth
                        name='task'
                        value={todoData.task}
                        onChange={updataTask}
                        label='Todo...'
                        placeholder='Enter you Task'
                    />
                    <Button variant='contained' onClick={() => { addDataToFinalData() }}>Add</Button>
                </Paper>

                <div>
                    {/* {buttons} */}
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={recivedData.snackBarOpen}
                        onClose={handleClose}
                        autoHideDuration={2000}
                        severity="error"
                        message="Task already added"
                        key={vertical + horizontal}
                    /> 
                </div>
            </Container>
        </>
    )
}

export default HomeComponent