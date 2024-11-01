import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../../shared/models/table-column.model';
import { User } from '../../shared/models/user.model';
import { TremendousApiService } from './tremendous-api.sevice';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class RewardsSummaryComponent implements OnInit {
  public countries = [
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
      name: "Australia",
      code: "AU"
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg",
      name: "India",
      code: "IN"
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg",
      name: "United States",
      code: "US"
    },
  ];
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
  private allProducts: any[] = [];
  public filteredProducts: any[] = [];

  @ViewChild('usersPaginator', { static: false })
  public userSurveysPaginator!: MatPaginator;

  constructor(private tremendousApiService: TremendousApiService) {
    this.generateColumns();
    this.getProductData();
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

  public filterProducts(countryCode: string): void {
    this.filteredProducts = this.allProducts.filter((product) => product.countryCode === countryCode);
  }

  private getProductData() {
    this.tremendousApiService.getProducts().subscribe((response) => {
      this.allProducts = response;
      this.filteredProducts = this.allProducts;
    }, error => {
      console.error('Error fetching products', error);
    });
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

  public openDialog(id: string): void { }
}
