import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashdealsComponent } from './flashdeals.component';

describe('FlashdealsComponent', () => {
  let component: FlashdealsComponent;
  let fixture: ComponentFixture<FlashdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
