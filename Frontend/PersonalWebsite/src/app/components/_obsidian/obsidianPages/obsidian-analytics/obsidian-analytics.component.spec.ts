import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsidianAnalyticsComponent } from './obsidian-analytics.component';

describe('ObsidianAnalyticsComponent', () => {
  let component: ObsidianAnalyticsComponent;
  let fixture: ComponentFixture<ObsidianAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsidianAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsidianAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
