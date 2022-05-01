import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsFilterComponent } from './contracts-filter.component';

describe('ContractsFilterComponent', () => {
  let component: ContractsFilterComponent;
  let fixture: ComponentFixture<ContractsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractsFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
