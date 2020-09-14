import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empList : Employee[] = [];
  constructor(private service:RegistrationService) {
   
   }

  ngOnInit() {   
    
    this.service.getAllStudents().subscribe(data => {
      console.log(data);
      this.empList = data});
  }

  deleteStudent(id){
    this.service.deleteStudent(id).subscribe(data => this.empList = data);
  }
  }
