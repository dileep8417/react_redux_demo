import { createSlice } from "@reduxjs/toolkit"

const teachersInitialState = {
    names: []
}

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: teachersInitialState,
    reducers: {
        addTeacherName: (state, action) => {
            state.names.push(action.payload);
        }
    }
});

export const teacherReducer = teacherSlice.reducer;

export const { addTeacherName } = teacherSlice.actions;