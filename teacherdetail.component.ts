import { Component } from '@angular/core';
import { TeacherdetailService } from '../services/teacherdetail.service';

@Component({
  selector: 'app-teacherdetail',
  templateUrl: './teacherdetail.component.html',
  styleUrls: ['./teacherdetail.component.css']
})
export class TeacherdetailComponent {
  teacherupData = {
    Teachername: '',
    TeacherID: '',
    mno: '',
    addr: '',
    emailID: ''
  };
  constructor(private teacherdetailService: TeacherdetailService) {}

  onSubmit() {
    this.teacherdetailService.addTeacherData(this.teacherupData);
    console.log(this.teacherdetailService.getTeacherData());
  }


}
