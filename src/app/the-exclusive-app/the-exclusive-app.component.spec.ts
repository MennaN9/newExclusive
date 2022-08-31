import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheExclusiveAppComponent } from './the-exclusive-app.component';

describe('TheExclusiveAppComponent', () => {
  let component: TheExclusiveAppComponent;
  let fixture: ComponentFixture<TheExclusiveAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheExclusiveAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheExclusiveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
