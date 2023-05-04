import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsidianPage2Component } from './obsidian-page2.component';

describe('ObsidianPage2Component', () => {
  let component: ObsidianPage2Component;
  let fixture: ComponentFixture<ObsidianPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsidianPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsidianPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
