 import { ENDPOINT_STUDENTS_URL } from "../../constants/constants";

 export const deleteStudent = async (studentId) => {
        try {
            const response = await fetch(`${ENDPOINT_STUDENTS_URL}/${studentId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                return response.status;
            } else {
                throw new Error(`Error deleting student: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };