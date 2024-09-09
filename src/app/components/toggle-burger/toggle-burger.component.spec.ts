import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBurgerComponent } from './toggle-burger.component';

describe('ToggleBurgerComponent', () => {
  let component: ToggleBurgerComponent;
  let fixture: ComponentFixture<ToggleBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleBurgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
