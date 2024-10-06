import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../../shared/models/table-column.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  public columns: TableColumn<User>[] = [];
  public usersColumns: string[] = [];

  public mockUserData: User = {
    Id: '1',
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'john.doe@email.com',
    Birthdate: new Date('1998/07/02'),
    Gender: 'M',
    pointsAccumulated: 0,
    pointsRedeemed: 100,
    createdAt: new Date('2022/07/31'),
    IsSystemAdmin: false,
    surevys: [
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
      {
        id: '1',
        expiry: new Date('2023/07/31'),
        lastAccessed: '',
        name: 'New Survey June 2023',
        createdAt: new Date('2023/05/15'),
        points: 10,
        status: 'New',
      },
    ],
  };

  private adminUser: User = {
    Id: '1',
    FirstName: 'System',
    LastName: 'Admin',
    Email: 'john.doe@email.com',
    Birthdate: new Date('1998/07/02'),
    Gender: 'M',
    pointsAccumulated: 0,
    pointsRedeemed: 100,
    createdAt: new Date('2022/07/31'),
    IsSystemAdmin: true,
    surevys: [],
  };

  public users: User[] = [
    this.adminUser,
    this.mockUserData,
    this.mockUserData,
    this.mockUserData,
  ];

  public userSummaryDataSource = new MatTableDataSource(this.users);
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15, 25, 50, 100];

  @ViewChild('usersPaginator', { static: false })
  public userSurveysPaginator!: MatPaginator;

  constructor() {
    this.generateColumns();
  }

  public ngOnInit(): void {
    this.columns.forEach((column) => {
      if (column.columnDef.length) {
        this.usersColumns.push(column.columnDef);
      }
    });
  }

  public ngAfterViewInit(): void {
    this.userSummaryDataSource.paginator = this.userSurveysPaginator;
  }

  private generateColumns(): void {
    this.columns = [
      {
        columnDef: 'firstName',
        header: 'First Name',
        image: false,
        cell: (element: User) => `${element.FirstName}`,
      },
      {
        columnDef: 'lastName',
        header: 'Last Name',
        image: false,
        cell: (element: User) => `${element.LastName}`,
      },
      {
        columnDef: 'email',
        header: 'E-Mail',
        image: false,
        cell: (element: User) => `${element.Email}`,
      },
      {
        columnDef: 'IsSystemAdmin',
        header: 'System Admin',
        image: true,
        cell: (element: User) => `${element.IsSystemAdmin}`,
      },
      {
        columnDef: 'createdAt',
        header: 'Created on',
        image: false,
        cell: (element: User) => `${element.createdAt?.toLocaleString()}`,
      },
      {
        columnDef: 'updatedAt',
        header: 'Updated At',
        image: false,
        cell: (element: User) => `${element.updatedAt?.toLocaleString()}`,
      },
    ];
  }

  public openDialog(id: string): void {}
}
