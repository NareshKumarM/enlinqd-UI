import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ELEMENT_DATA, meterReadings } from './data';
import { TableColumn } from '../../shared/models/table-column.model';
import { MeterReading } from './model';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-power',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './power.component.html',
  styleUrl: './power.component.scss'
})
export class PowerComponent implements OnInit, AfterViewInit {
  area: string;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 15, 25, 50, 100];
  bmrData = ELEMENT_DATA;
  smrData = meterReadings;

  @ViewChild('bmrdataSourcePaginator', { static: false })
  bmrdataSourcePaginator!: MatPaginator;
  @ViewChild('smrdataSourcePaginator', { static: false })
  smrdataSourcePaginator!: MatPaginator;

  columns: TableColumn<MeterReading>[] = [];
  readingColumns: string[] = [];

  displayedColumns: string[] = ['meter', 'name', 'cost', 'consumption'];
  bmrdataSource = new MatTableDataSource();
  smrdataSource = new MatTableDataSource();

  Highcharts: typeof Highcharts = Highcharts; // Reference Highcharts
  chartOptions: Highcharts.Options = {
    title: { text: 'Energy Consumption Over Time' },
    xAxis: { categories: this.smrData.map(x => new Date(x.readingDate).toLocaleString()) },
    yAxis: [{ title: { text: 'Energy (kWh)' } }, { title: { text: 'Voltage (V)' }, opposite: true }, { title: { text: 'Current (A)' }, opposite: true }],
    series: [
      {
        type: 'line',
        name: 'Usage',
        data: this.smrData.map(x => x.currentReading),
        yAxis: 0
      },
      {
        type: 'line',
        name: 'Voltage',
        data: this.smrData.map(x => x.voltage),
        yAxis: 1
      },
      {
        type: 'line',
        name: 'Current',
        data: this.smrData.map(x => x.current),
        yAxis: 2
      }
    ]
  };

  constructor(private route: ActivatedRoute) {
    this.generateColumns();
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.area = data['section'];
    });

    this.columns.forEach((column) => {
      if (column.columnDef.length) {
        this.readingColumns.push(column.columnDef);
      }
    });

    this.bmrdataSource.data = this.bmrData;
    this.smrdataSource.data = this.smrData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.bmrdataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.bmrdataSource.paginator = this.bmrdataSourcePaginator;
    this.smrdataSource.paginator = this.smrdataSourcePaginator;
  }

  generateColumns() {
    this.columns = [
      {
        columnDef: 'meterId',
        header: 'Meter Id',
        image: false,
        cell: (element: MeterReading) => `${element.meterId}`,
      },
      {
        columnDef: 'readingDate',
        header: 'Reading Date',
        image: false,
        cell: (element: MeterReading) => `${new Date(element.readingDate).toLocaleString()}`,
      },
      {
        columnDef: 'currentReading',
        header: 'Current Reading',
        image: false,
        cell: (element: MeterReading) => `${element.currentReading.toFixed(4)}`,
      },
      {
        columnDef: 'previousReading',
        header: 'Previous Reading',
        image: false,
        cell: (element: MeterReading) => `${element.previousReading.toFixed(4)}`,
      },
      {
        columnDef: 'energyConsumption',
        header: 'Consumption',
        image: false,
        cell: (element: MeterReading) => `${element.energyConsumption.toFixed(4)}`,
      },
      {
        columnDef: 'unit',
        header: 'Unit',
        image: false,
        cell: (element: MeterReading) => `${element.unit}`,
      },
      {
        columnDef: 'voltage',
        header: 'Voltage (V)',
        image: false,
        cell: (element: MeterReading) => `${element.voltage.toFixed(2)}`,
      },
      {
        columnDef: 'current',
        header: 'Current (A)',
        image: false,
        cell: (element: MeterReading) => `${element.current.toFixed(2)}`,
      },
      {
        columnDef: 'powerFactor',
        header: 'Power Factor',
        image: false,
        cell: (element: MeterReading) => `${element.powerFactor.toFixed(2)}`,
      },
      {
        columnDef: 'status',
        header: 'Status',
        image: false,
        cell: (element: MeterReading) => `${element.status}`,
      }
    ];
  }

}
