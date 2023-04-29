import { Component } from '@angular/core';
import { NewstudentService } from '../services/newstudent.service';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent{
  loginupData = {
    Studentname: '',
    StudentID: '',
    mno: '',
    addr: '',
    emailID: ''
  };
  constructor(private newstudentService: NewstudentService) {}

  onSubmit() {
    this.newstudentService.addLoginupData(this.loginupData);
    console.log(this.newstudentService.getLoginupData());
  }

}