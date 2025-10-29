import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconComponent, IgxButtonDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxPaginatorComponent, IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { Customers1Component } from './customers-1.component';

describe('Customers1Component', () => {
  let component: Customers1Component;
  let fixture: ComponentFixture<Customers1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customers1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxIconComponent, IgxButtonDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxPaginatorComponent, IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
