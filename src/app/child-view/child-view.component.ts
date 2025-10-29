import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IGridEditDoneEventArgs, IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-swagger/customer-dto';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-child-view',
  imports: [IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSnackbarComponent],
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit, OnDestroy {
  @ViewChild('successSnackbar', { static: true, read: IgxSnackbarComponent})
  private successSnackbar?: IgxSnackbarComponent;

  private destroy$: Subject<void> = new Subject<void>();
  public northwindSwaggerCustomerDto: CustomerDto[] = [];

  constructor(
    public northwindSwaggerService: NorthwindSwaggerService,
  ) {}


  ngOnInit() {
    this.northwindSwaggerService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindSwaggerCustomerDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async rowEditDoneGrid(e: IGridEditDoneEventArgs): Promise<void> {
    let data;
    if(e.isAddRow == false) {
      data = await firstValueFrom(this.northwindSwaggerService.putCustomerDto((e.rowData as CustomerDto)?.customerId ?? '', e.rowData as CustomerDto));
    }
    if (data != null) {
      this.successSnackbar?.toggle();
    }
  }
}
