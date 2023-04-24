import { useDispatch, useSelector } from 'react-redux';
import { addStudentName } from "../../features/student/studentSlice";
import { useRef } from 'react';

const AddStudent = () => {
    const isDuplicateStudentName = useSelector(state => state.students.isDuplicateStudentName);
    const dispatch = useDispatch();
    const studentFieldRef = useRef('');

    function addStudentClickHandler() {
        const studentName = studentFieldRef.current.value;
        dispatch(addStudentName(studentName));
    }

    return (
        <div>
            <input type="text" ref={studentFieldRef} placeholder="Student Name" required />
            <button onClick={addStudentClickHandler}>Add Student</button>
            {isDuplicateStudentName && <h4 style={{color: 'red'}}>Student name was already added</h4>}
        </div>
    );
}

export default AddStudent;