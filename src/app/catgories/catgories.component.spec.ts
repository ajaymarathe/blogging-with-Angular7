import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoriesComponent } from './catgories.component';

describe('CatgoriesComponent', () => {
  let component: CatgoriesComponent;
  let fixture: ComponentFixture<CatgoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
