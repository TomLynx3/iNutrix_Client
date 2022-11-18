import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import {
  GetAllProductsRes,
  ProductDTO,
  ProductsService,
} from 'src/app/services/products/products.service';
import { Translate } from 'src/app/utilities/tools';
import { SidemodalService } from '../../sidemodal/services/sidemodal.service';
import { SidemodalComponent } from '../../sidemodal/sidemodal/sidemodal.component';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
@Translate({ en: require('../i18n/products.en.json') })
export class ProductsTableComponent implements OnInit {
  @Input()
  public allowEdit: boolean = true;

  @Input()
  public ignoreProducts: string[] = [];

  public products: ProductDTO[] = [];

  public productsToRender: ProductDTO[] = [];

  public displayedColumns: string[] = [
    'actions',
    'name',
    'productGroup',
    'protein',
    'fat',
    'carbohydrates',
    'kJ',
    'kcal',
    'A',
    'B1',
    'B2',
    'PP',
    'C',
    'Ca',
    'P',
    'Fe',
  ];

  public editIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'pen-to-square'],
  };

  constructor(private readonly _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService
      .getAllProducts()
      .subscribe((res: GetAllProductsRes) => {
        if (res.success) {
          this._productsService.parseProducts(res.result);
          this.products = res.result.filter(
            (x) => !this.ignoreProducts.includes(x.id)
          );
          this.productsToRender = this.products;
        }
      });
  }

  public selectAll(event: MatCheckboxChange) {
    for (let product of this.products) {
      product.selected = event.checked;
    }
  }

  public toggleSelect(event: MatCheckboxChange, product: ProductDTO) {
    product.selected = event.checked;
  }

  public getSelectedProducts(): ProductDTO[] {
    return this.products.filter((x) => x.selected);
  }
}
