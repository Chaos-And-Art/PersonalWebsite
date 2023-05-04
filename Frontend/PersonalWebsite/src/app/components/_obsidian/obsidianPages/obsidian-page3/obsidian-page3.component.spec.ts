import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsidianPage3Component } from './obsidian-page3.component';

describe('ObsidianPage3Component', () => {
  let component: ObsidianPage3Component;
  let fixture: ComponentFixture<ObsidianPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsidianPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsidianPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
