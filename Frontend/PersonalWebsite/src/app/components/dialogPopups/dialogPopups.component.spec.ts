import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopupsComponent } from './dialogPopups.component';

describe('DialogPopupsComponent', () => {
  let component: DialogPopupsComponent;
  let fixture: ComponentFixture<DialogPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
