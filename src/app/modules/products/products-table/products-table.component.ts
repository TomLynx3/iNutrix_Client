import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import { ProductDTO } from 'src/app/services/products/products.service';
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
  @ViewChild('sidebar') public sideModal: TemplateRef<any> | undefined;

  @Input()
  public products: ProductDTO[] = [];

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

  public deleteIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'trash'],
  };
  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };
  constructor(private readonly _sideModalService: SidemodalService) {}

  ngOnInit(): void {}

  public selectAll(event: MatCheckboxChange) {
    for (let product of this.products) {
      product.selected = event.checked;
    }
  }

  public toggleSelect(event: MatCheckboxChange, product: ProductDTO) {
    product.selected = event.checked;
  }

  public addNewProduct() {
    if (this.sideModal) {
      this._sideModalService.open(this.sideModal);
    }
  }

  public close() {
    this._sideModalService.close();
  }
}
