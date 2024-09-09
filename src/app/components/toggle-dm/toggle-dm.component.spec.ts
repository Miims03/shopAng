import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDmComponent } from './toggle-dm.component';

describe('ToggleDmComponent', () => {
  let component: ToggleDmComponent;
  let fixture: ComponentFixture<ToggleDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleDmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
