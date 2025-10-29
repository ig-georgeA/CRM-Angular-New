import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-swagger/customer-dto';
import { MeetingsTasksType } from '../models/crmapp-data/meetings-tasks-type';
import { SalesType } from '../models/financial/sales-type';
import { CRMAppDataService } from '../services/crmapp-data.service';
import { FinancialService } from '../services/financial.service';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-home',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxCategoryChartModule, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listSelectedItem?: MeetingsTasksType;
  public listSelectedItem1?: MeetingsTasksType;
  public listSelectedItem2?: CustomerDto;
  public listSelectedItem3?: CustomerDto;
  public financialSales: SalesType[] = [];
  public northwindSwaggerCustomerDto: CustomerDto[] = [];
  public cRMAppDataMeetingsTasks: MeetingsTasksType[] = [];

  constructor(
    public financialService: FinancialService,
    public northwindSwaggerService: NorthwindSwaggerService,
    public cRMAppDataService: CRMAppDataService,
  ) {}


  ngOnInit() {
    this.financialService.getSales().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialSales = data
    );
    this.northwindSwaggerService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindSwaggerCustomerDto = data
    );
    this.cRMAppDataService.getMeetingsTasksList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.cRMAppDataMeetingsTasks = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
