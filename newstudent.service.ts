import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewstudentService {
  loginupData: any[] = [];

  addLoginupData(formData: any) {
    this.loginupData.push(formData);
  }

  getLoginupData() {
    return this.loginupData;
  }
}
