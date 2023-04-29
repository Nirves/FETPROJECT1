import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OptionComponent } from './option/option.component';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { TeacherdetailComponent } from './teacherdetail/teacherdetail.component';



const routes: Routes = [{path:"home",component:HomePageComponent},{path:"signup",component:SignUpComponent},
{path:"option",component:OptionComponent},{path:"option/newstudent",component:NewstudentComponent},{path:"",component:HomePageComponent}
,{path:"option/teacherdetail",component:TeacherdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
