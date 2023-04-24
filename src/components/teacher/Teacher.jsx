import AddTeacher from "./AddTeacher";
import ListTeachers from "./ListTeachers";

const Teacher = () => {
    console.log('Teacher component rendered')

    return (
        <div>
            <AddTeacher />
            <ListTeachers />
        </div>
    );
}

export default Teacher;