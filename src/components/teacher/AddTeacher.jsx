import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addTeacherName } from '../../features/teacher/teacherSlice';

const AddTeacher = () => {
    const teacherFieldRef = useRef('');
    const dispatch = useDispatch();

    function addTeacherNameHandler() {
        const teacherName = teacherFieldRef.current.value;
        dispatch(addTeacherName(teacherName));
    }

    return (
        <div>
            <input type="text" ref={teacherFieldRef} placeholder="Teacher Name" required />
            <button onClick={addTeacherNameHandler}>Add Teacher</button>
        </div>
    );
}

export default AddTeacher;