import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIteamComponent } from './dashboard-iteam.component';

describe('DashboardIteamComponent', () => {
  let component: DashboardIteamComponent;
  let fixture: ComponentFixture<DashboardIteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardIteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
