/** Customer Model */
export class Mentor {
    public id: number;
    public name: string;
    public department: number;
    constructor(
        id: number,
        name: string,
        department: number
    ) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
}

/** Mentor Form Model */
export class MentorForm {
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
