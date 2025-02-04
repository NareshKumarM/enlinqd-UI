import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey-api.service';
import { SurveyDefinition } from '../../survey.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableColumn } from '../../../../shared/models/table-column.model';
import { LoaderService } from '../../../../shared/services/loader.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],  standalone: false
})
export class ListComponent implements OnInit {

  public surveyResponse: SurveyDefinition[] = [];
  public columns: TableColumn<SurveyDefinition>[] = [];
  public summaryColumns: string[] = [];
  public summaryDataSource = new MatTableDataSource();
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15, 25, 50, 100];

  constructor(
    private router: Router,
    private surveysApi: SurveyService,
    private loaderService: LoaderService,
    // private notificationsService: NotificationsService,
    private toastNotification: MatSnackBar) {
    this.generateColumns();
  }

  ngOnInit(): void {
    this.columns.forEach((column) => {
      if (column.columnDef.length) {
        this.summaryColumns.push(column.columnDef);
      }
    });

    this.getSurveys();
  }

  public getSurveys(): void {
    this.loaderService.show();
    this.surveysApi.getAllSurveys().subscribe({
      next: (res) => {
        this.surveyResponse = res;
        this.summaryDataSource.data = res;
      },
      error: (error) => { console.log(error) },
      complete: () => {
        this.loaderService.hide();
      }
    });
  }

  private generateColumns(): void {
    this.columns = [
      {
        columnDef: 'name',
        header: 'Name',
        image: false,
        cell: (element: SurveyDefinition) => `${element.name?.length > 0 ? element.name : '-'}`,
      },
      {
        columnDef: 'delete',
        header: '',
        image: true,
        cell: (element: SurveyDefinition) => ``,
      }
    ];
  }


  public async NavigateToSurveyCreator(id: string): Promise<void> {
    if (id && id?.length > 0) {
      await this.router.navigateByUrl("admin/surveys/designer/" + id);
    } else {
      await this.router.navigate(['admin/surveys/designer']);
    }
  }

  public deleteSurvey(row: SurveyDefinition): void {

    // const deleteWarningDialog = this.notificationsService.initDialogComponent(
    //   "warning",
    //   [`Are you sure you wish to delete this survey?`]
    // );

    // deleteWarningDialog.afterClosed().subscribe((result) => {
    //   if (result === true) {

    var answer = window.confirm("Delete Survey?");
    if (answer) {
      this.loaderService.show();
      this.surveysApi.deleteSurvey(row.id).subscribe(
        {
          next: () => {
            this.getSurveys();
            this.toastNotification.open("Survey deleted successfully", "X");
          },
          // error: (error) => this.notificationsService.handleErrorMessages(error),
          error: (error) => console.log(error),
          complete: () => this.loaderService.hide()
        }
      );
    }


    //   }
    // });
  }
}
