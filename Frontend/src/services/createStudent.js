import { ENDPOINT_STUDENTS_URL } from "../../constants/constants";

export const createStudent = async (newStudent) => {
    try {
        const response = await fetch(ENDPOINT_STUDENTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        });
        if (response.status === 201) {
          return response.status;  
        } else {
            throw new Error("Error inserting student");
        }
    } catch (error) {
        console.error("Error inserting student:", error);
    }
};