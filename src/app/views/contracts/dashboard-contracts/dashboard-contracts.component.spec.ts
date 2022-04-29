import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContractsComponent } from './dashboard-contracts.component';

describe('DashboardContractsComponent', () => {
  let component: DashboardContractsComponent;
  let fixture: ComponentFixture<DashboardContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
