import { studentReducer } from "../features/student/studentSlice";
import { teacherReducer } from "../features/teacher/teacherSlice";

export const rootReducer = {
    students: studentReducer,
    teachers: teacherReducer
};