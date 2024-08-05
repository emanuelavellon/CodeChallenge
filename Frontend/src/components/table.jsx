import {useState, useContext} from 'react';
import { StudentContext } from '../context/students';
import {Modal} from '../components/modal';
import { ConfirmDelete } from './confirmDelete';
import "../styles/table.scss";
import "../styles/general-font-sizes.scss";

export function Table({students, openModalStudent, editStudent}){ 
    const {deleteStudent} = useContext(StudentContext)
    const [showConfirmDelete, setShowConfirmDelete] = useState({state: false, student: null});

    const handleDeleteConfirm=(student)=>{
        setShowConfirmDelete({
            state: true,
            student
        });
       
    }
    const handleDeleteStudent=()=>{
         deleteStudent(showConfirmDelete.student.id);
         setShowConfirmDelete({
            state: false,
            student: null
        });
    }

    return(
        <>
        <Modal isOpen={showConfirmDelete.state} _height={"180px"} onClose={()=>setShowConfirmDelete({state: false, id: null})}>
           <ConfirmDelete student={showConfirmDelete} onDelete={handleDeleteStudent}/>
        </Modal>
            <div className="container">
                <div className="header">
                    <h2>&nbsp;Manage Students</h2>
                    <div>
                        <button className="btn btn-add" onClick={()=>openModalStudent()}>
                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            &nbsp;New Student
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    students.map((student)=>{
                        return (
                            <tr key={student.id}>
                                <td><input type="checkbox"/></td>
                                <td>
                                    {student.name}
                                </td>
                                <td>
                                    {student.lastName}
                                </td>
                                <td>
                                    {student.email}
                                </td>
                                <td>
                                    {student.age}
                                </td>
                                <td>
                                    {student.grade}
                                </td>
                                <td className="action-icons">
                                    <button className='btn btn-edit' onClick={()=>editStudent(student)}>
                                    <span>
                                        <span className="material-symbols-outlined">
                                          edit
                                        </span>
                                    </span>
                                    </button>
                                    <button className='btn btn-delete' onClick={()=>handleDeleteConfirm(student)}>
                                    <span>
                                        <span className="material-symbols-outlined">
                                          delete
                                        </span>
                                    </span>
                                    </button>
                                    
                                </td>
                                
                            </tr>
                        )
                    })
                }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
