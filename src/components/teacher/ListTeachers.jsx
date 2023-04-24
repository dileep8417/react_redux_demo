import { useSelector } from "react-redux";

const ListTeachers = () => {
    const teacherNames = useSelector(state => state.teachers.names);
    
    console.log('List Teacher component rendered')

    return (
        <ul>
            {teacherNames.map((name) => {
                return <li key={name}>{name}</li>
            })}
        </ul>
    );
}

export default ListTeachers;