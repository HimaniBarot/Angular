/** Mentor Form Model */
export class FilterForm {
    public name: string;
    public department: number;
    constructor(
        name: string,
        department: number
    ) {
        this.name = name;
        this.department = department;
    }
}
