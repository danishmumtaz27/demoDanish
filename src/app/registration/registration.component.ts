import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private regService: RegistrationService, private route: Router) { }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    this.regService.saveStudent(form).subscribe(data => {
      console.log("data saved successfully")
      this.route.navigate(['dashboard']);
    }
    );
    

  }
}
