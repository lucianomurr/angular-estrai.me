import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaGameComponent } from './cta-game.component';

describe('CtaGameComponent', () => {
  let component: CtaGameComponent;
  let fixture: ComponentFixture<CtaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
