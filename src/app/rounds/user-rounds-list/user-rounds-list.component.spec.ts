import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoundsListComponent } from './user-rounds-list.component';

describe('UserRoundsListComponent', () => {
  let component: UserRoundsListComponent;
  let fixture: ComponentFixture<UserRoundsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoundsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoundsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
