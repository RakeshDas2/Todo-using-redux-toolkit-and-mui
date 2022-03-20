import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editDataInList, editDialogeOpen } from '../redux/reducers/listSlice'

function ModalComponent() {

    const recivedData = useSelector(state => state.finalData)
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        task: '',
        completed: false
    })

    useEffect(() => {
        setTodo(recivedData.data)
    }, [recivedData.index])

    const onChangeEvent = (e) => {
        const todoCopy = { ...todo }
        todoCopy[e.target.name] = e.target.value
        setTodo(todoCopy)
    }

    const closeModal = () => {
        dispatch(editDialogeOpen(false))
    }

    const clickToEdit = () => {
        dispatch(editDataInList(todo))
    }



    return (
        <>
            <Dialog open={recivedData.dialogeOpen} onClose={closeModal}>
                <DialogTitle>

                    Edit your Task

                </DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        name='task'
                        value={todo.task}
                        onChange={onChangeEvent}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={clickToEdit}>Edit</Button>
                    <Button variant='contained' color='error' onClick={closeModal}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalComponent