import { createSlice } from '@reduxjs/toolkit';

const studentInitialState = {
    names: [],
    isDuplicateStudentName: false,
}

const studentSlice = createSlice({
    name: 'students',
    initialState: studentInitialState,
    reducers: {
        addStudentName: (state, action) => {
            if (state.names.includes(action.payload)) {
                state.isDuplicateStudentName = true;
                return;
            }
            state.names.push(action.payload);
            state.isDuplicateStudentName = false;
        },
        removeStudentName: (state, action) => {
            state.names.filter(studentName => studentName !== action.payload);
        }
    }
});

export const studentReducer = studentSlice.reducer;

export const { addStudentName, removeStudentName } = studentSlice.actions;