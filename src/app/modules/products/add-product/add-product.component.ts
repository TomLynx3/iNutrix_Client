import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import { ProductGroupDTO, ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public nameIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'n'],
  };
  public typeIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 't'],
  };
  public proteinIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'p'],
  };
  public fatIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'f'],
  };
  public carboIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'c'],
  };

  public axeroftolIcon : CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'a'],
  };

  public vitaminIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'b'],
  };

  public vitamin_pIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'p'],
  };

  public vitamin_fIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'f'],
  };

  public percentIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'percent'],
  };

  public productGroups: ProductGroupDTO[] = [];

  public productAddForm: FormGroup = new FormGroup({});

  constructor(private readonly _productsService: ProductsService) {}

  ngOnInit(): void {
    this.productAddForm = new FormGroup({
      productName: new FormControl('', Validators.required),
    });

    this.productGroups = this._productsService.getProductGroups()

  }

}
