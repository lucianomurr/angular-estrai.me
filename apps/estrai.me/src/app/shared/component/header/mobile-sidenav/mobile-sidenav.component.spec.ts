import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidenavComponent } from './mobile-sidenav.component';

describe('MobileSidenavComponent', () => {
  let component: MobileSidenavComponent;
  let fixture: ComponentFixture<MobileSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
