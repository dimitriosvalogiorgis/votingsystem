import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolparComponent } from './polpar.component';

describe('PolparComponent', () => {
  let component: PolparComponent;
  let fixture: ComponentFixture<PolparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolparComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
