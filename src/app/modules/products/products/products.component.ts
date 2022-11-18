import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import {
  GetAllProductsRes,
  ProductDTO,
  ProductsService,
} from 'src/app/services/products/products.service';
import { SidemodalService } from '../../sidemodal/services/sidemodal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('sidebar') public sideModal: TemplateRef<any> | undefined;
  
  constructor(private readonly _sideModalService: SidemodalService) {}

  public deleteIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'trash'],
  };
  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };

  public products: ProductDTO[] = [];


  ngOnInit(): void {}

  public addNewProduct() {
    if (this.sideModal) {
      this._sideModalService.open(this.sideModal);
    }
  }

  public close() {
    this._sideModalService.close();
  }

  public saveProduct(newProduct: ProductDTO) : void {
    console.log(newProduct)
  }

}
