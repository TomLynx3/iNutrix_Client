import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import { Translate } from 'src/app/utilities/tools';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  animations: [
    trigger('openMenu', [
      state('opened', style({ width: '250px' })),
      state('closed', style({ width: '65px' })),
      transition('* => *', [animate(350)]),
    ]),
    trigger('openMenuContent', [
      state('opened', style({ marginLeft: '250px' })),
      state('closed', style({ marginLeft: '65px' })),
      transition('* => *', [animate(350)]),
    ]),
  ],
})
@Translate({ en: require('./i18n/base.en.json') })
export class BaseComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  //need add current menu item

  public currentPage: UserMenuItem | undefined;

  public isMenuOpen: boolean = false;

  public userMenu: UserMenuItem[] = [
    {
      icon: {
        iconFamily: IconFamily.FONTAWESOME,
        value: ['fas', 'plate-wheat'],
      },
      name: 'BASE_USERMENU_PRODUCTS',
      route: '/products',
    },
    {
      icon: {
        iconFamily: IconFamily.FONTAWESOME,
        value: ['fas', 'gear'],
      },
      name: 'BASE_USERMENU_SETTINGS',
      route: '/settings',
    },
    {
      icon: {
        iconFamily: IconFamily.FONTAWESOME,
        value: ['fas', 'bowl-food'],
      },
      name: 'BASE_USERMENU_MEAL_PLANS',
      route: '/meal-plans',
    },
  ];

  ngOnInit(): void {
    this.currentPage = this.userMenu[0];
    //  this._router.navigate([this.currentPage.route]);
  }

  public onHover(event: MouseEvent) {
    this.isMenuOpen = true;
  }
  public onMouseLeave(event: any) {
    this.isMenuOpen = false;
  }

  public navigate(menuItem: UserMenuItem) {
    this.currentPage = menuItem;
    this._router.navigate([menuItem.route]);
  }
}

export interface UserMenuItem {
  icon: CustomIcon;
  name: string;
  route: string;
}
