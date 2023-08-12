import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferspageComponent } from './offerspage.component';

describe('OfferspageComponent', () => {
  let component: OfferspageComponent;
  let fixture: ComponentFixture<OfferspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
