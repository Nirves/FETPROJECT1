import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherdetailService {
  teacherupData: any[] = [];

  addTeacherData(formData: any) {
    this.teacherupData.push(formData);
  }

  getTeacherData() {
    return this.teacherupData;
  }
}
