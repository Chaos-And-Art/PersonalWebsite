import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsidianPage1Component } from './obsidian-page1.component';

describe('ObsidianPage1Component', () => {
  let component: ObsidianPage1Component;
  let fixture: ComponentFixture<ObsidianPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsidianPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsidianPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
