import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHashComponent } from './check-hash.component';

describe('CheckHashComponent', () => {
  let component: CheckHashComponent;
  let fixture: ComponentFixture<CheckHashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckHashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
