export class Demo{
    id: number
    department: string;
    employee: Employee[];
}

interface Employee {
    id: number;
    name: string;
    age: number;
    gender: string;
    city: string;
    hobbies: Hobby[];
}
interface Hobby {
    id: number;
    hobby: string;
}