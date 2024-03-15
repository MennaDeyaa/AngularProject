import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductDetailsComponent } from './newproduct-details.component';

describe('NewproductDetailsComponent', () => {
  let component: NewproductDetailsComponent;
  let fixture: ComponentFixture<NewproductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewproductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
