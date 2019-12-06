import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesUpdateComponent } from './matches-update.component';

describe('MatchesUpdateComponent', () => {
  let component: MatchesUpdateComponent;
  let fixture: ComponentFixture<MatchesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
