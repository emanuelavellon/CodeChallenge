import { ENDPOINT_STUDENTS_URL } from "../../constants/constants";

export const updateStudent = async (updatedStudent) => {
    try {
        const response = await fetch(`${ENDPOINT_STUDENTS_URL}/${updatedStudent.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStudent),
        });

        if (response.ok) { 
            return response.status;
        } else {
            throw new Error(`Error updating student: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error updating student:", error);
        throw error; 
    }
};