import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2jContactComponent } from './w2j-contact.component';

describe('W2jContactComponent', () => {
  let component: W2jContactComponent;
  let fixture: ComponentFixture<W2jContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2jContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2jContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
