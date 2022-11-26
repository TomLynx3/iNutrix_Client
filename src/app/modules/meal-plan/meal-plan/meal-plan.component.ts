import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import {
  DietDay,
  DietGoal,
  GetDietRes,
  MealService,
} from 'src/app/services/meal-service/meal.service';
import { Translate } from 'src/app/utilities/tools';
import { SidemodalService } from '../../sidemodal/services/sidemodal.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss'],
})
@Translate({ en: require('../i18n/meal-plan.en.json') })
export class MealPlanComponent implements OnInit {
  @ViewChild('sidebar') public sideBar: TemplateRef<any> | undefined;
  @ViewChild('tabs') public tabs: MatTabGroup | undefined;

  public DietGoal = DietGoal;

  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };

  constructor(
    private readonly _sidebarModal: SidemodalService,
    private readonly _mealService: MealService
  ) {}

  ngOnInit(): void {}

  public dietGoal: DietGoal = DietGoal.BALANCEDIET;
  public diet: DietDay[] = dummy;

  public addNewMealPlan() {
    if (this.sideBar) {
      this._sidebarModal.open(this.sideBar, '800px');
    }
  }

  public close() {
    this._sidebarModal.close();
  }

  public selectDietGoal(dietGoal: DietGoal) {
    this.dietGoal = dietGoal;
  }

  public createDiet() {
    this._mealService.getDiet(this.dietGoal, 3).subscribe((res: GetDietRes) => {
      if (res.success && this.tabs) {
        this.diet = res.result;
        //  console.log(JSON.stringify(res.result));

        setTimeout(() => {
          if (this.tabs) {
            this.tabs.selectedIndex = 0;
          }
        }, 200);
        this._sidebarModal.close();
      }
    });
  }
}

export const dummy = [
  {
    date: '2022-11-23T13:53:01.422904Z',
    dietDayMetadata: {
      products: [
        {
          productId: 'eefc40a0-e5ba-4f25-9331-a4e6811ce372',
          name: 'PRODUCT_NAMES_CUCUMBER',
          amount: 4,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: '19d484ad-f299-4acd-ab32-f58f384bd36a',
          name: 'PRODUCT_NAMES_COCOAPOWDER',
          amount: 0.7221987937260479,
          productGroup: {
            groupName: 'LookUp_ProductGroup_ConfectioneryProducts',
            id: '55272bb5-a34e-40a8-bae1-9568fba7e582',
          },
        },
        {
          productId: '9935f710-3123-41cf-8e2c-de3e43257159',
          name: 'PRODUCT_NAMES_CHICKENEGG',
          amount: 1.8367277408493001,
          productGroup: {
            groupName: 'LookUp_ProductGroup_EggProducts',
            id: 'ccae21b8-5266-4915-9577-2472d12c7f22',
          },
        },
        {
          productId: '0577ba04-6fa1-44eb-ae2b-82097e2deec8',
          name: 'PRODUCT_NAMES_ONIONS',
          amount: 3.174487835030521,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: '73be6e34-3189-42c4-9207-2266ce4f23b9',
          name: 'PRODUCT_NAMES_SALAD',
          amount: 3.231138924286644,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: '1b266408-c855-4fe4-b717-8b6e95824f83',
          name: 'PRODUCT_NAMES_PEANUTS',
          amount: 0.5057599506983684,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Nuts',
            id: '9729e36a-3291-42fe-b374-15edd556755a',
          },
        },
        {
          productId: 'd2537d48-87f1-448a-86dd-ac40fd3adcc0',
          name: 'PRODUCT_NAMES_SOURMILK',
          amount: 0.4738277008312465,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MilkProducts',
            id: 'cd0e1d5a-98c3-4356-9c5b-43a148dceecb',
          },
        },
        {
          productId: 'cf926631-228f-474f-a9d3-696c0e92dd66',
          name: 'PRODUCT_NAMES_SEMOLINA',
          amount: 1.8522815553724938,
          productGroup: {
            groupName: 'LookUp_ProductGroup_CerealProducts',
            id: '2ebede41-f276-4d58-9da2-87911c0dfe3f',
          },
        },
        {
          productId: '700a49f1-4c71-44ff-b00d-884510109314',
          name: 'PRODUCT_NAMES_WHITECURRANTS',
          amount: 2,
          productGroup: {
            groupName: 'LookUp_ProductGroup_FruitsAndBerries',
            id: '92c5026a-06df-4d8a-a3f7-d26b218fdfaf',
          },
        },
        {
          productId: 'a7049d77-90f2-49af-8189-0769e3a826d7',
          name: 'PRODUCT_NAMES_BEEFLIVER',
          amount: 0.006610036273685453,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: '5177c3db-86ff-4a58-b3ab-c9ab2bf079a1',
          name: 'PRODUCT_NAMES_SUGAR',
          amount: 0.2778012062739519,
          productGroup: {
            groupName: 'LookUp_ProductGroup_ConfectioneryProducts',
            id: '55272bb5-a34e-40a8-bae1-9568fba7e582',
          },
        },
        {
          productId: 'a3db3fce-0e7c-42f7-b36c-413c8c616423',
          name: 'PRODUCT_NAMES_DUCKMEAT',
          amount: 0.3833164126148313,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: 'f13bef64-8904-4857-baca-629a7b8cccab',
          name: 'PRODUCT_NAMES_PASTA',
          amount: 2.705335881403664,
          productGroup: {
            groupName: 'LookUp_ProductGroup_CerealProducts',
            id: '2ebede41-f276-4d58-9da2-87911c0dfe3f',
          },
        },
        {
          productId: 'd6302a4e-098c-44ed-af86-6446f6134a96',
          name: 'PRODUCT_NAMES_RADISH',
          amount: 0.5910436971453594,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
      ],
      protein: {
        minimumValue: 186.43061250000002,
        maximumValue: 227.85963750000002,
        actualValue: 186.43061250000005,
      },
      fat: {
        minimumValue: 49.71483,
        maximumValue: 60.762570000000004,
        actualValue: 60.76256999999999,
      },
      carbohydrates: {
        minimumValue: 447.43347,
        maximumValue: 546.8631300000001,
        actualValue: 472.38385693769214,
      },
      kcal: {
        minimumValue: 2982.8898000000004,
        maximumValue: 3645.7542000000003,
        actualValue: 2982.889800000001,
      },
      A: {
        minimumValue: 0.7,
        maximumValue: 0.9,
        actualValue: 0.6999999999999998,
      },
      B1: {
        minimumValue: 1,
        maximumValue: 1.2,
        actualValue: 0.9999999999999999,
      },
      B2: {
        minimumValue: 1,
        maximumValue: 1.3,
        actualValue: 1.2999999999999998,
      },
      PP: { minimumValue: 14, maximumValue: 16, actualValue: 14 },
      C: { minimumValue: 80, maximumValue: 90, actualValue: 89.99999999999999 },
      Ca: {
        minimumValue: 850,
        maximumValue: 1000,
        actualValue: 850.0000000000001,
      },
      P: { minimumValue: 800, maximumValue: 1200, actualValue: 1200 },
      Fe: { minimumValue: 13, maximumValue: 20, actualValue: 20 },
    },
  },
  {
    date: '2022-11-24T13:53:01.422904Z',
    dietDayMetadata: {
      products: [
        {
          productId: '19d484ad-f299-4acd-ab32-f58f384bd36a',
          name: 'PRODUCT_NAMES_COCOAPOWDER',
          amount: 0.9999999999999999,
          productGroup: {
            groupName: 'LookUp_ProductGroup_ConfectioneryProducts',
            id: '55272bb5-a34e-40a8-bae1-9568fba7e582',
          },
        },
        {
          productId: '73d393fd-ee83-4f42-8390-bb4efe2bf6bb',
          name: 'PRODUCT_NAMES_CHICKENMEAT',
          amount: 1.4929364620062147,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: '35405596-0f9f-41a5-a0a8-15b62a02705d',
          name: 'PRODUCT_NAMES_TANGERINES',
          amount: 2,
          productGroup: {
            groupName: 'LookUp_ProductGroup_FruitsAndBerries',
            id: '92c5026a-06df-4d8a-a3f7-d26b218fdfaf',
          },
        },
        {
          productId: 'd2537d48-87f1-448a-86dd-ac40fd3adcc0',
          name: 'PRODUCT_NAMES_SOURMILK',
          amount: 0.41981888685777147,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MilkProducts',
            id: 'cd0e1d5a-98c3-4356-9c5b-43a148dceecb',
          },
        },
        {
          productId: 'eefc40a0-e5ba-4f25-9331-a4e6811ce372',
          name: 'PRODUCT_NAMES_CUCUMBER',
          amount: 0.9613828129087325,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: 'f13bef64-8904-4857-baca-629a7b8cccab',
          name: 'PRODUCT_NAMES_PASTA',
          amount: 1.5302541445555988,
          productGroup: {
            groupName: 'LookUp_ProductGroup_CerealProducts',
            id: '2ebede41-f276-4d58-9da2-87911c0dfe3f',
          },
        },
        {
          productId: 'a3db3fce-0e7c-42f7-b36c-413c8c616423',
          name: 'PRODUCT_NAMES_DUCKMEAT',
          amount: 0.43371522814699753,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: 'cf926631-228f-474f-a9d3-696c0e92dd66',
          name: 'PRODUCT_NAMES_SEMOLINA',
          amount: 3.524686212388766,
          productGroup: {
            groupName: 'LookUp_ProductGroup_CerealProducts',
            id: '2ebede41-f276-4d58-9da2-87911c0dfe3f',
          },
        },
        {
          productId: '1b266408-c855-4fe4-b717-8b6e95824f83',
          name: 'PRODUCT_NAMES_PEANUTS',
          amount: 0.16847068345164373,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Nuts',
            id: '9729e36a-3291-42fe-b374-15edd556755a',
          },
        },
        {
          productId: '223e0101-0aa9-40b0-a53c-358455c803bf',
          name: 'PRODUCT_NAMES_LEEKS',
          amount: 2.3550218843846467,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: '9c158d8b-5634-4260-8be0-3cd0ca35ccc3',
          name: 'PRODUCT_NAMES_PIGLIVER',
          amount: 0.006406805526605951,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: '9935f710-3123-41cf-8e2c-de3e43257159',
          name: 'PRODUCT_NAMES_CHICKENEGG',
          amount: 1.5333701693428337,
          productGroup: {
            groupName: 'LookUp_ProductGroup_EggProducts',
            id: 'ccae21b8-5266-4915-9577-2472d12c7f22',
          },
        },
        {
          productId: 'a7049d77-90f2-49af-8189-0769e3a826d7',
          name: 'PRODUCT_NAMES_BEEFLIVER',
          amount: 0.003705929910535435,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: '73be6e34-3189-42c4-9207-2266ce4f23b9',
          name: 'PRODUCT_NAMES_SALAD',
          amount: 4,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
      ],
      protein: {
        minimumValue: 186.43061250000002,
        maximumValue: 227.85963750000002,
        actualValue: 186.43061250000008,
      },
      fat: {
        minimumValue: 49.71483,
        maximumValue: 60.762570000000004,
        actualValue: 60.762570000000004,
      },
      carbohydrates: {
        minimumValue: 447.43347,
        maximumValue: 546.8631300000001,
        actualValue: 462.03049113249267,
      },
      kcal: {
        minimumValue: 2982.8898000000004,
        maximumValue: 3645.7542000000003,
        actualValue: 2982.8898,
      },
      A: {
        minimumValue: 0.7,
        maximumValue: 0.9,
        actualValue: 0.6999999999999998,
      },
      B1: {
        minimumValue: 1,
        maximumValue: 1.2,
        actualValue: 0.9999999999999998,
      },
      B2: {
        minimumValue: 1,
        maximumValue: 1.3,
        actualValue: 1.2999999999999996,
      },
      PP: {
        minimumValue: 14,
        maximumValue: 16,
        actualValue: 13.999999999999998,
      },
      C: { minimumValue: 80, maximumValue: 90, actualValue: 89.99999999999997 },
      Ca: { minimumValue: 850, maximumValue: 1000, actualValue: 850 },
      P: { minimumValue: 800, maximumValue: 1200, actualValue: 1200 },
      Fe: {
        minimumValue: 13,
        maximumValue: 20,
        actualValue: 20.000000000000004,
      },
    },
  },
  {
    date: '2022-11-25T13:53:01.422904Z',
    dietDayMetadata: {
      products: [
        {
          productId: '9935f710-3123-41cf-8e2c-de3e43257159',
          name: 'PRODUCT_NAMES_CHICKENEGG',
          amount: 1.756932522131572,
          productGroup: {
            groupName: 'LookUp_ProductGroup_EggProducts',
            id: 'ccae21b8-5266-4915-9577-2472d12c7f22',
          },
        },
        {
          productId: 'bd7d7718-8cfa-4026-856a-af1686307a08',
          name: 'PRODUCT_NAMES_RICE',
          amount: 0.7399305419657235,
          productGroup: {
            groupName: 'LookUp_ProductGroup_CerealProducts',
            id: '2ebede41-f276-4d58-9da2-87911c0dfe3f',
          },
        },
        {
          productId: 'd2537d48-87f1-448a-86dd-ac40fd3adcc0',
          name: 'PRODUCT_NAMES_SOURMILK',
          amount: 0.2573169185150402,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MilkProducts',
            id: 'cd0e1d5a-98c3-4356-9c5b-43a148dceecb',
          },
        },
        {
          productId: '19d484ad-f299-4acd-ab32-f58f384bd36a',
          name: 'PRODUCT_NAMES_COCOAPOWDER',
          amount: 0.9999999999999999,
          productGroup: {
            groupName: 'LookUp_ProductGroup_ConfectioneryProducts',
            id: '55272bb5-a34e-40a8-bae1-9568fba7e582',
          },
        },
        {
          productId: 'a7049d77-90f2-49af-8189-0769e3a826d7',
          name: 'PRODUCT_NAMES_BEEFLIVER',
          amount: 0.010680576910679574,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: '0577ba04-6fa1-44eb-ae2b-82097e2deec8',
          name: 'PRODUCT_NAMES_ONIONS',
          amount: 3.0952251802391495,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: 'aa2e2603-700a-49fd-9fc6-680aae6fe11c',
          name: 'PRODUCT_NAMES_FATTYPORK',
          amount: 0.23438503564475155,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: 'eefc40a0-e5ba-4f25-9331-a4e6811ce372',
          name: 'PRODUCT_NAMES_CUCUMBER',
          amount: 3.435124951174926,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: 'a3db3fce-0e7c-42f7-b36c-413c8c616423',
          name: 'PRODUCT_NAMES_DUCKMEAT',
          amount: 0.09778145923334497,
          productGroup: {
            groupName: 'LookUp_ProductGroup_MeatProducts',
            id: '1b727966-7fc1-45e9-9be6-613d7188466c',
          },
        },
        {
          productId: '73be6e34-3189-42c4-9207-2266ce4f23b9',
          name: 'PRODUCT_NAMES_SALAD',
          amount: 4,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: 'f13bef64-8904-4857-baca-629a7b8cccab',
          name: 'PRODUCT_NAMES_PASTA',
          amount: 4,
          productGroup: {
            groupName: 'LookUp_ProductGroup_CerealProducts',
            id: '2ebede41-f276-4d58-9da2-87911c0dfe3f',
          },
        },
        {
          productId: '1b266408-c855-4fe4-b717-8b6e95824f83',
          name: 'PRODUCT_NAMES_PEANUTS',
          amount: 0.353362747407816,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Nuts',
            id: '9729e36a-3291-42fe-b374-15edd556755a',
          },
        },
        {
          productId: '779c0691-28d7-417c-b563-f50d10be5767',
          name: 'PRODUCT_NAMES_CARROT',
          amount: 0.269022223610866,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
        {
          productId: '700a49f1-4c71-44ff-b00d-884510109314',
          name: 'PRODUCT_NAMES_WHITECURRANTS',
          amount: 2,
          productGroup: {
            groupName: 'LookUp_ProductGroup_FruitsAndBerries',
            id: '92c5026a-06df-4d8a-a3f7-d26b218fdfaf',
          },
        },
        {
          productId: '7f361ce9-f81a-44d1-83f1-913dd78c539d',
          name: 'PRODUCT_NAMES_CABAGGE',
          amount: 0.2816816087130281,
          productGroup: {
            groupName: 'LookUp_ProductGroup_Vegetables',
            id: '784d2e75-a9ab-46bc-986f-1359e6f7c240',
          },
        },
      ],
      protein: {
        minimumValue: 186.43061250000002,
        maximumValue: 227.85963750000002,
        actualValue: 186.43061250000008,
      },
      fat: {
        minimumValue: 49.71483,
        maximumValue: 60.762570000000004,
        actualValue: 60.76257000000001,
      },
      carbohydrates: {
        minimumValue: 447.43347,
        maximumValue: 546.8631300000001,
        actualValue: 469.8115752122158,
      },
      kcal: {
        minimumValue: 2982.8898000000004,
        maximumValue: 3645.7542000000003,
        actualValue: 2982.8898,
      },
      A: {
        minimumValue: 0.7,
        maximumValue: 0.9,
        actualValue: 0.7000000000000001,
      },
      B1: { minimumValue: 1, maximumValue: 1.2, actualValue: 1 },
      B2: { minimumValue: 1, maximumValue: 1.3, actualValue: 1.3 },
      PP: {
        minimumValue: 14,
        maximumValue: 16,
        actualValue: 14.000000000000004,
      },
      C: { minimumValue: 80, maximumValue: 90, actualValue: 90 },
      Ca: {
        minimumValue: 850,
        maximumValue: 1000,
        actualValue: 849.9999999999998,
      },
      P: {
        minimumValue: 800,
        maximumValue: 1200,
        actualValue: 1199.9999999999998,
      },
      Fe: {
        minimumValue: 13,
        maximumValue: 20,
        actualValue: 20.000000000000007,
      },
    },
  },
];
