import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingComponent } from './waiting.component';

describe('WaitingComponent', () => {
  let component: WaitingComponent;
  let fixture: ComponentFixture<WaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
