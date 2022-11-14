import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import { ProductGroupDTO } from 'src/app/services/products/products.service';
import { SidemodalService } from '../../sidemodal/services/sidemodal.service';
import { SideModalModule } from '../../sidemodal/sidemodal.module';

@Component({
  selector: 'product-ban-list',
  templateUrl: './ban-list.component.html',
  styleUrls: ['./ban-list.component.scss'],
})
export class BanListComponent implements OnInit {
  @ViewChild('sidebar') public sideBar: TemplateRef<any> | undefined;

  public displayedColumns: string[] = ['actions', 'name', 'productGroup'];

  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };
  public deleteIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'trash'],
  };

  @Input()
  public bannedProducts: BannedProduct[] = [
    // {
    //   name: 'Oats',
    //   productGroup: {
    //     id: '23',
    //     groupName: 'Cerelal ',
    //   },
    // },
  ];

  constructor(private readonly _sideBarService: SidemodalService) {}

  ngOnInit(): void {}

  public openProductList(): void {
    if (this.sideBar) {
      this._sideBarService.open(this.sideBar, '1450px');
    }
  }

  public close(): void {
    this._sideBarService.close();
  }
}

export interface BannedProduct {
  name: string;
  productGroup: ProductGroupDTO;
}
