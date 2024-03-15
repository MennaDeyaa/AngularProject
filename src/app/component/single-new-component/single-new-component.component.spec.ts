import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewComponentComponent } from './single-new-component.component';

describe('SingleNewComponentComponent', () => {
  let component: SingleNewComponentComponent;
  let fixture: ComponentFixture<SingleNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleNewComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
