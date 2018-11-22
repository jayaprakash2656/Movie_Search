import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieapiComponent } from './movieapi.component';

describe('MovieapiComponent', () => {
  let component: MovieapiComponent;
  let fixture: ComponentFixture<MovieapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
