import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2jUsComponent } from './w2j-us.component';

describe('W2jUsComponent', () => {
  let component: W2jUsComponent;
  let fixture: ComponentFixture<W2jUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2jUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2jUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
