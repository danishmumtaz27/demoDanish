export class Employee {

    id:number;
    firstName:String;
    lastName:String;
    joiningDate:String;
    constructor(private emp_id:number,private first_name:String,private last_name:String, private date_Of_joining:String){
        this.id=emp_id;
        this.firstName=first_name;
        this.lastName=last_name;
        this.joiningDate = date_Of_joining;
    }
}
