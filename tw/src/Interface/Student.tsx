import Person from "./Person";

interface Student extends Person{
    faculty: string
    group: string
    averageGrade: number
}
export default Student;

