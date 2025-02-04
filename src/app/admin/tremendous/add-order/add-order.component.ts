import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from '../../../shared/services/loader.service';
import { TremendousApiService } from '../tremendous-api.sevice';
import { Product } from '../model/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderRequest } from '../model/request.model';
import Utils from '../../../shared/components/utils';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, standalone: false
})
export class AddOrderComponent {

  public allproducts: Product[];
  private selectedCountry: string = 'AU';
  public selectedCountryCurrency: string = 'AUD';
  public orderFormGroup: FormGroup;

  public get selectedProducts(): FormControl {
    return this.orderFormGroup.get('products') as FormControl;
  }

  public get selectedProductIds(): string[] {
    let ids: string[] = [];

    this.selectedProducts?.value.forEach(pr => {
      const matched = this.allproducts?.find(p => Utils.caseInsensitiveEqualMatch(p.name, pr));
      if (matched) {
        ids.push(matched.id);
      }
    });

    return ids;
  }

  constructor(
    public dialogRef: MatDialogRef<AddOrderComponent>,
    private tremendousApiService: TremendousApiService,
    private loaderService: LoaderService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.generateOrderForm();
    this.getProducts();
  }

  generateOrderForm() {
    this.orderFormGroup = new FormGroup({
      id: new FormControl(''),
      recipientName: new FormControl('', [Validators.required]),
      recipientEmail: new FormControl('', [Validators.required]),
      denomination: new FormControl('', [Validators.required]),
      currencyCode: new FormControl(this.selectedCountryCurrency, [Validators.required]),
      deliveryMethod: new FormControl('EMAIL', [Validators.required]),
      fundingSourceId: new FormControl('BALANCE', [Validators.required]),
      products: new FormControl('', [Validators.required])
    });
  }

  createOrder(): void {

    this.loaderService.show();

    const formValue = this.orderFormGroup.getRawValue();

    const order: OrderRequest = {
      id: Utils.GenerateGUID(),
      denomination: formValue?.denomination,
      currencyCode: formValue?.currencyCode,
      deliveryMethod: formValue?.deliveryMethod,
      recipientEmail: formValue?.recipientEmail,
      recipientName: formValue?.recipientName,
      fundingSourceId: formValue?.fundingSourceId,
      campaignId: null,
      externalId: null,
      products: this.selectedProductIds
    };

    console.log(order);

    // this.tremendousApiService.createOrder(order).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.loaderService.hide();
    //     this.dialogRef.close();
    //   },
    //   error: (er) => {
    //     console.log(er);
    //     this.loaderService.hide();
    //   }
    // });
  }

  private getProducts() {
    this.loaderService.show();
    this.tremendousApiService.getProducts(this.selectedCountry, this.selectedCountryCurrency).subscribe({
      next: (res) => {
        this.allproducts = res?.products;
        this.loaderService.hide();
      },
      error: (er) => {
        console.log(er);
        this.loaderService.hide();
      }
    });
  }
}
