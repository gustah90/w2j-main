import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2jHomeComponent } from './w2j-home.component';

describe('W2jHomeComponent', () => {
  let component: W2jHomeComponent;
  let fixture: ComponentFixture<W2jHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2jHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2jHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
