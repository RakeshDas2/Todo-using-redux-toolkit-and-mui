import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    data: { task: '', completed: false },
    index: '',
    dialogeOpen: false,
    snackBarOpen:false
}

export const listSlice = createSlice({
    name: 'finalData',
    initialState,
    reducers: {
        addData: (state, action) => {
            const findIndex = state.list.findIndex(ele => ele.task === action.payload.task)
            if (findIndex === -1) {
                state.list.push(action.payload)
            } else {
                console.log('data Added');
                state.snackBarOpen=!state.snackBarOpen
            }
        },
        deleteData: (state, action) => {
            state.list = state.list.filter((ele, index) => {
                return index !== action.payload
            })
        },
        editDialogeOpen: (state, action) => {
            // state.list.dialogeOpen=action.payload// remember because of premitive type you cannot update primitive direactly. becarus immer doesnot support this.it only support reference type
            return {
                ...state,
                dialogeOpen: action.payload
            }
        },
        editIndex: (state, action) => {
            return {
                ...state,
                index: action.payload

            }
        },
        editData: (state, action) => {
            console.log(action.payload);
            state.data = action.payload
            // state.list[state.index]=action.payload
        },
        editDataInList: (state, action) => {
            const findIndex1 = state.list.findIndex(ele => ele.task === action.payload.task)
            if (findIndex1 === -1) {
                state.list[state.index] = action.payload  
            } else {
                console.log('data Added');
                state.snackBarOpen=!state.snackBarOpen
            }

            // state.list[state.index] = action.payload  

        },
        editCompletedInList:(state,action)=>{
         
                state.list[state.index].completed=!state.list[state.index].completed
        },
        editSnackBar:(state)=>{
            state.snackBarOpen=!state.snackBarOpen
        }
    }
})

export const { addData, deleteData, editDialogeOpen, editData, editIndex, editDataInList,editCompletedInList,editSnackBar} = listSlice.actions
export default listSlice.reducer