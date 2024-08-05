import { createContext, useState, useCallback } from "react";
import { useGetStudents } from "../services/getStudents";
import { useEffect } from 'react';
import { createStudent } from "../services/createStudent";
import { deleteStudent as deleteStudentService } from "../services/removeStudent";
import { updateStudent as updateStudentService } from "../services/updateStudent";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const { fetchStudents } = useGetStudents();

  const setInitialStudents = useCallback((students) => {
    setStudents(students);
  }, []);

  const insertStudent = async (student) => {
    try {
      const code = await createStudent(student);
      if (code === 201) {
        const updatedStudents = await fetchStudents();
        setInitialStudents(updatedStudents);
      }
    } catch (error) {
      console.error("Error inserting student:", error);
    }
  }


  const updateStudent = async (updatedStudent) => {
    try {
      const code = await updateStudentService(updatedStudent);
      if (code === 200) {
        const updatedStudents = await fetchStudents();
        setInitialStudents(updatedStudents);
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  }

  const deleteStudent = async (id) => {
    try {
      const code = await deleteStudentService(id);
      if (code === 200) {
        const updatedStudents = await fetchStudents();
        setInitialStudents(updatedStudents);
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }

  useEffect(() => {
    fetchStudents().then(setInitialStudents);
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        insertStudent,
        updateStudent,
        deleteStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}