import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpropertiesComponent } from './editproperties.component';

describe('EditpropertiesComponent', () => {
  let component: EditpropertiesComponent;
  let fixture: ComponentFixture<EditpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
