import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddlesComponent } from './riddles.component';

describe('RiddlesComponent', () => {
  let component: RiddlesComponent;
  let fixture: ComponentFixture<RiddlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
