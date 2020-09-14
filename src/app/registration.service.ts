import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/employee';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient : HttpClient,private datePipe: DatePipe) {

   }

   getAllStudents():any {
     return this.httpClient.get("http://localhost:8080/getAllStudents",{responseType:'json'});
   }

   saveStudent(employee : Employee){
    

     employee.joiningDate = this.datePipe.transform(employee.joiningDate,'yyyy-MM-dd');
     console.log(employee);
     return this.httpClient.post("http://localhost:8080/addStudent",employee);
   }

   deleteStudent(id):any{
     return this.httpClient.delete("http://localhost:8080/deleteStudent/"+id,{responseType:"json"});
   }
}
