import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoriesComponent } from './show-categories.component';

describe('ShowCategoriesComponent', () => {
  let component: ShowCategoriesComponent;
  let fixture: ComponentFixture<ShowCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
