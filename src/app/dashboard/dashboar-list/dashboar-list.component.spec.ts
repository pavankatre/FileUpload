import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarListComponent } from './dashboar-list.component';

describe('DashboarListComponent', () => {
  let component: DashboarListComponent;
  let fixture: ComponentFixture<DashboarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
