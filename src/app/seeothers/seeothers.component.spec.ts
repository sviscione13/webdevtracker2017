import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOthersComponent } from './seeothers.component';

describe('PlayComponent', () => {
  let component: SeeOthersComponent;
  let fixture: ComponentFixture<SeeOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
