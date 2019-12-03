import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsDetailsComponent } from './rounds-details.component';

describe('RoundsDetailsComponent', () => {
  let component: RoundsDetailsComponent;
  let fixture: ComponentFixture<RoundsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
