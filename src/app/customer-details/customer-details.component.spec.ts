import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonDirective, IgxIconComponent, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxCheckboxComponent, IGX_LIST_DIRECTIVES, IGX_CHIPS_DIRECTIVES } from 'igniteui-angular';
import { CustomerDetailsComponent } from './customer-details.component';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxCheckboxComponent, IGX_LIST_DIRECTIVES, IGX_CHIPS_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
