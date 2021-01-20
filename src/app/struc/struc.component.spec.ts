import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucComponent } from './struc.component';

describe('StrucComponent', () => {
  let component: StrucComponent;
  let fixture: ComponentFixture<StrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
