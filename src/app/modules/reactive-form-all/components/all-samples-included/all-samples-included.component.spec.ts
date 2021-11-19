/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllSamplesIncludedComponent } from './all-samples-included.component';

describe('AllSamplesIncludedComponent', () => {
  let component: AllSamplesIncludedComponent;
  let fixture: ComponentFixture<AllSamplesIncludedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSamplesIncludedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSamplesIncludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
