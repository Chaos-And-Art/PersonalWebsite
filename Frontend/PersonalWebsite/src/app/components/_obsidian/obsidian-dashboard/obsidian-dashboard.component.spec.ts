import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsidianDashboardComponent } from './obsidian-dashboard.component';

describe('ObsidianDashboardComponent', () => {
  let component: ObsidianDashboardComponent;
  let fixture: ComponentFixture<ObsidianDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsidianDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsidianDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
