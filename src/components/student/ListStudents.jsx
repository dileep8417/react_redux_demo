import { useSelector } from 'react-redux';

const ListStudents = () => {
    const studentNames = useSelector(state => state.students.names);

    return (
        <ul>
            {studentNames.map((name, index) => {
                return <li key={index}>{name}</li>
            })}
        </ul>
    );
}

export default ListStudents;