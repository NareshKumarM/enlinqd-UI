import { Component, ElementRef, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { dashboardOptions } from '../data';
import Dashboards from '@highcharts/dashboards';
import DataGrid from '@highcharts/dashboards/datagrid';
import LayoutModule from '@highcharts/dashboards/modules/layout';

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);

Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private options = {};
  private readonly isAsync = true;

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    this.setOptions();
    this.renderDashboard();
  }

  private renderDashboard() {
    Dashboards.board(this.elementRef.nativeElement, this.options, this.isAsync);
  }

  private setOptions() {
    this.options = dashboardOptions;
  }
}
