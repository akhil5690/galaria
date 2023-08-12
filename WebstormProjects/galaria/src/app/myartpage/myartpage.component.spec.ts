import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyartpageComponent } from './myartpage.component';

describe('MyartpageComponent', () => {
  let component: MyartpageComponent;
  let fixture: ComponentFixture<MyartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
