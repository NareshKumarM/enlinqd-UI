import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../../shared/models/table-column.model';
import { TremendousApiService } from './tremendous-api.sevice';
import { Product, ProductImage, Products } from './model/product.model';
import { RewardBatch } from './model/reward.model';
import Utils from '../../shared/components/utils';

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
  public columns: TableColumn<Product>[] = [];
  public productColumns: string[] = [];
  public productSummaryDataSource = new MatTableDataSource();
  public rewardsHistoryDataSource = new MatTableDataSource();
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15, 25, 50, 100];
  private allProducts: Products;
  public filteredProducts: any[] = [];
  public rewardsHistory: RewardBatch[] = [{
    id: Utils.GenerateGUID(),
    date: new Date('2024/01/01'),
    name: 'Test Batch 01 Jan 2024',
    rewards:[{
      id: Utils.GenerateGUID(),
      rewardeeName:'Raghavan K',
      rewardDate: new Date('2024/01/01'),
      amount: 50,
      productId:'0EGZII4AGZDL',
      productLogo:'https://testflight.tremendous.com/product_images/0EGZII4AGZDL/logo',
      productName: 'Kogan',
      status:'Success'
    }]
  }];

  @ViewChild('usersPaginator', { static: false })
  public userSurveysPaginator!: MatPaginator;

  constructor(private tremendousApiService: TremendousApiService) {
    this.generateColumns();
    this.getProductData();
  }

  public ngOnInit(): void {
    this.columns.forEach((column) => {
      if (column.columnDef.length) {
        this.productColumns.push(column.columnDef);
      }
    });
  }

  public ngAfterViewInit(): void {
    this.productSummaryDataSource.paginator = this.userSurveysPaginator;
  }

  public filterProducts(countryCode: string): void {
    // this.filteredProducts = this.allProducts.products.filter((product) => product.countries === countryCode);
  }

  private getProductData() {
    this.tremendousApiService.getProducts('AU', 'AUD').subscribe((response) => {
      this.allProducts = response;
      this.filteredProducts = response.products;
      this.productSummaryDataSource.data = response.products;
      console.log(this.allProducts);
    }, error => {
      console.error('Error fetching products', error);
    });
  }

  private generateColumns(): void {
    this.columns = [
      {
        columnDef: 'name',
        header: 'name',
        image: false,
        cell: (element: Product) => `${element.name}`,
      },
      {
        columnDef: 'logo',
        header: '',
        image: true,
        cell: (element: Product) => `${this.getImage(element.images, 'logo')}`,
      },
      {
        columnDef: 'card',
        header: '',
        image: true,
        cell: (element: Product) => `${this.getImage(element.images, 'card')}`,
      }
    ];
  }

  public openDialog(id: string): void { }

  private getImage(productImages: ProductImage[], type: string): string {
    return productImages?.find(i => i.type === type)?.src;
  }
}
