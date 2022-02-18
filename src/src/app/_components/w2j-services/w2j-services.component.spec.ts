import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2jServicesComponent } from './w2j-services.component';

describe('W2jServicesComponent', () => {
  let component: W2jServicesComponent;
  let fixture: ComponentFixture<W2jServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2jServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2jServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
