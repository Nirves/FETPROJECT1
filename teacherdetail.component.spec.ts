import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdetailComponent } from './teacherdetail.component';

describe('TeacherdetailsComponent', () => {
  let component: TeacherdetailComponent;
  let fixture: ComponentFixture<TeacherdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
