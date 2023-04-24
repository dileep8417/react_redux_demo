import Student from "../components/student/Student";
import Teacher from "../components/teacher/Teacher";


const Container = () => {
    console.log('Container component rendered')

    return (
        <div style={{display: 'flex', gap: '48px', justifyContent: 'center', marginTop: '48px'}}>
            <Student />
            <Teacher />
        </div>
    );
}

export default Container;