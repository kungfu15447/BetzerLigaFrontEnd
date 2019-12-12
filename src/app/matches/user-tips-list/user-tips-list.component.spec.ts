import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTipsListComponent } from './user-tips-list.component';

describe('UserTipsListComponent', () => {
  let component: UserTipsListComponent;
  let fixture: ComponentFixture<UserTipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
