import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTipsUpdateComponent } from './user-tips-update.component';

describe('UserTipsUpdateComponent', () => {
  let component: UserTipsUpdateComponent;
  let fixture: ComponentFixture<UserTipsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTipsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTipsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
