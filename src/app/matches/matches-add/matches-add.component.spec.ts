import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesAddComponent } from './matches-add.component';

describe('MatchesAddComponent', () => {
  let component: MatchesAddComponent;
  let fixture: ComponentFixture<MatchesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
