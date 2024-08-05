import { useContext, useState } from 'react'
import { Table } from './components/table'
import { NewStudent } from './components/newStudent';
import { Modal } from './components/modal';
import { StudentContext } from './context/students';

function App() {
  const { students } = useContext(StudentContext);
  const [newModalStudent, setNewModalStudent] = useState(false);
  const [studentToEdit, setStudentToEdit]=useState(null);
  const openModalStudent = () => setNewModalStudent(true);

  const closeModalStudent = () => {
    setNewModalStudent(false)
    setStudentToEdit(null)
  };
  
  const editStudent=(student)=>{
    setStudentToEdit(student) 
  }

  return (
    <>
      <main>
        <Modal isOpen={newModalStudent || studentToEdit!=null} onClose={closeModalStudent}>
          <NewStudent onClose={closeModalStudent} studentToEdit={studentToEdit}/>
        </Modal>

        <Table students={students} openModalStudent={openModalStudent} editStudent={editStudent}/>
      </main>   
  </> 
  )
}

export default App
