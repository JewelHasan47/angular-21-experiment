import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaPage } from './aria-page';

describe('AriaPage', () => {
  let component: AriaPage;
  let fixture: ComponentFixture<AriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AriaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
