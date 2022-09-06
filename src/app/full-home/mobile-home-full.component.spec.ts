import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeFullComponent } from './mobile-home-full.component';

describe('MobileHomeFullComponent', () => {
  let component: MobileHomeFullComponent;
  let fixture: ComponentFixture<MobileHomeFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomeFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
