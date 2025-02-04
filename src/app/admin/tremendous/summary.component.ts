import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TremendousApiService } from './tremendous-api.sevice';
import { Order } from './model/order.model';
import Utils from '../../shared/components/utils';
import { LoaderService } from '../../shared/services/loader.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddOrderComponent } from './add-order/add-order.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, standalone: false
})
export class RewardsSummaryComponent implements OnInit {
  public orderColumns: string[] = ['id', 'createdAt', 'status'];
  public ordersHistoryDataSource = new MatTableDataSource();
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15, 25, 50, 100];

  private expandedOrderId: string;

  @ViewChild('ordersPaginator', { static: false })
  public ordersPaginator!: MatPaginator;

  constructor(
    private loaderService: LoaderService,
    private tremendousApiService: TremendousApiService,
    private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.getOrderData();
  }

  public ngAfterViewInit(): void {
    this.ordersHistoryDataSource.paginator = this.ordersPaginator;
  }

  public displayExpandIcon(element: Order): string {
    return Utils.caseInsensitiveEqualMatch(this.expandedOrderId, element.id) ? "expand_less" : "expand_more";
  }

  public toggleRowExpand(element: Order): void {
    Utils.caseInsensitiveEqualMatch(this.expandedOrderId, element.id) ? this.expandedOrderId = null : this.expandedOrderId = element.id;
  }

  public createOrder(): void {
    this.dialog.open(AddOrderComponent, {
      width: '500px',
      data: {}
    });
  }

  private getOrderData() {
    this.loaderService.show();
    this.tremendousApiService.getOrders().subscribe({
      next: (res) => {
        this.ordersHistoryDataSource.data = res.orders;
        this.loaderService.hide();
      },
      error: (er) => {
        console.log(er);
        this.loaderService.hide();
      }
    });
  }
}
