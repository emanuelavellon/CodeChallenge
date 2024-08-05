import { STUDENT_CONFIG } from '../../constants/constants';
import { StudentContext } from '../context/students';
import { createSecuencialArray } from '../services/createArray';
import {useContext} from 'react'
import '../styles/newStudent.scss';

export function NewStudent({studentToEdit=null, onClose}){
    const { insertStudent, updateStudent } = useContext(StudentContext);
    const {MIN_AGE, MAX_AGE, GRADES}=STUDENT_CONFIG;
    const prefix= studentToEdit===null ? "Create New" : "Update";

    const handleAddStudent = (event) => {
        event.preventDefault(); 

        const name = event.target.elements.name.value;
        const lastName = event.target.elements.lastName.value;
        const email = event.target.elements.email.value;
        const age = event.target.elements.age.value;
        const grade = event.target.elements.grade.value;

        const studentData = {
            name,
            lastName,
            email,
            age,
            grade,
        };

        if(studentToEdit==null){
            if(studentData){
                insertStudent(studentData);
            }
              
        }else if(studentToEdit.id!=null){
            studentData.id = studentToEdit.id; 
            updateStudent(studentData);   
        }
        
        event.target.reset();  
        onClose();
    };

    return(
    <div className="container-modal">
        <br />
        <div className="header">
            <h3>{`${prefix} Student:`}</h3>        
        </div>
   
    <form className="studentForm" onSubmit={(event)=>handleAddStudent(event)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" defaultValue={studentToEdit?.name} placeholder='John' autoComplete="off" required/>
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" defaultValue={studentToEdit?.lastName} placeholder='Jackson'autoComplete="off" required/>
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue={studentToEdit?.email} placeholder='example@example.com' autoComplete="off" required/>
        <br />

        <label htmlFor="age">Age:</label>
        <select id="age" name="age" defaultValue={studentToEdit?.age} required>
            <option value="">Select Age</option>
            {createSecuencialArray(MIN_AGE, MAX_AGE).map((age, index) => (
                <option key={index} value={age}>
                    {age}
                </option>
            ))}
        </select>
        <br />  

        <label htmlFor="grade">Grade:</label>
        <select id="grade" name="grade" defaultValue={studentToEdit?.grade} required>
            <option value="">Select Grade</option>
            {GRADES.map((age, index) => (
                <option key={index} value={age}>
                    {age}
                </option>
            ))}
        </select>
        <br />

        <button type="submit">
          {prefix}
        </button>
    </form>
    </div>
    )
}