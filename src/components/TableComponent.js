import { Box, Checkbox, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteData, editCompletedInList, editData, editDialogeOpen, editIndex } from '../redux/reducers/listSlice';

function TableComponent() {
    const recivedData = useSelector(state => state.finalData)
    const dispatch = useDispatch()
    const deleteDataFromFinaldata = (i) => {
        dispatch(deleteData(i))
    }
    const editDataInFinalData=(ele,index)=>{
        dispatch(editDialogeOpen(true))
        dispatch(editIndex(index))
        dispatch(editData(ele))

    }

    const editCompletedInFinalData=(index)=>{
        dispatch(editIndex(index))
        dispatch(editCompletedInList())
    }
    
    return (
        <>
            {recivedData.list.length > 0 && recivedData.list.map((ele, index) => {
                return <Paper key={index} component={Box} style={{ width: '30%', marginLeft: '25%', marginTop: '3%' }}>
                    <Grid container>
                        <Grid item xs={1}>
                            <Checkbox onClick={()=>{editCompletedInFinalData(index)}} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='subtitle2' style={ele.completed?{marginTop: '2.5%' ,textDecoration:'line-through'}:{ marginTop: '2.5%' }}>{ele.task}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{ marginLeft: '40%',display:'flex' }}>
                                <EditIcon onClick={()=>{editDataInFinalData(ele,index)}} />
                                <DeleteIcon onClick={() => deleteDataFromFinaldata(index)} /></div>

                        </Grid>
                    </Grid>





                </Paper>
            })}
        </>
    )
}

export default TableComponent