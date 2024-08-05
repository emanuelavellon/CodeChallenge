import { ENDPOINT_STUDENTS_URL } from "../../constants/constants";
import { useState, useCallback } from "react";

export const useGetStudents = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = useCallback(() => {
        return fetch(ENDPOINT_STUDENTS_URL)
            .then(response => {
                if (!response.ok){
                    throw new Error(`Error during request: ${response.statusText}`);
                }
                return response.json();
            })
            .then(studentList => {
                if (studentList.length > 0) {
                    setStudents(studentList);
                }
                return studentList;
            })
            .catch(err => {
                console.error(err);
                return [];
            });
    }, []);

    return { students, fetchStudents };
};