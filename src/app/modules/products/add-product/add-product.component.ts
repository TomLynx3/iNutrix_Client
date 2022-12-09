import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import {
  ProductGroupDTO,
  ProductsService,
  ProductDTO,
} from 'src/app/services/products/products.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Output() public submitProductForm: EventEmitter<ProductDTO> =
    new EventEmitter<ProductDTO>();

  @Output() public submitProductFormGroup: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  @Input()
  public t: string | undefined;

  public selectedActivityType: ProductGroupDTO | undefined;

  public selected: boolean = false;

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

  public axeroftolIcon: CustomIcon = {
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
    console.log(this.t);

    this.productAddForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      protein: new FormControl(undefined, [Validators.required]),
      fat: new FormControl(undefined, [Validators.required]),
      carbohydrates: new FormControl(undefined, [Validators.required]),
      kcal: new FormControl(undefined, [Validators.required]),
      kj: new FormControl(undefined, [Validators.required]),
      a: new FormControl(undefined, [Validators.required]),
      b1: new FormControl(undefined, [Validators.required]),
      b2: new FormControl(undefined, [Validators.required]),
      pp: new FormControl(undefined, [Validators.required]),
      c: new FormControl(undefined, [Validators.required]),
      ca: new FormControl(undefined, [Validators.required]),
      p: new FormControl(undefined, [Validators.required]),
      fe: new FormControl(undefined, [Validators.required]),
    });

    this.getFormGroup();

    this.productGroups = this._productsService.getProductGroups();
    if (!this.selectedActivityType) {
      this.selectedActivityType = this.productGroups[0];
    }
  }

  public selectProductType(productGroupName: ProductGroupDTO) {
    this.selectedActivityType = productGroupName;
  }

  private getData(): ProductDTO {
    return {
      id: '',
      name: this.productAddForm.controls.productName.value,
      protein: this.productAddForm.controls.protein.value,
      fat: this.productAddForm.controls.fat.value,
      carbohydrates: this.productAddForm.controls.carbohydrates.value,
      kcal: this.productAddForm.controls.kcal.value,
      kj: this.productAddForm.controls.kj.value,
      a: this.productAddForm.controls.a.value,
      b1: this.productAddForm.controls.b1.value,
      b2: this.productAddForm.controls.b2.value,
      pp: this.productAddForm.controls.pp.value,
      c: this.productAddForm.controls.c.value,
      ca: this.productAddForm.controls.ca.value,
      p: this.productAddForm.controls.p.value,
      fe: this.productAddForm.controls.fe.value,
      selected: this.selected,
      productGroup: this.selectedActivityType!,
      isCustom: true,
    };
  }

  public submit(): void {
    this.submitProductForm.emit(this.getData());
  }

  private getFormGroup(): void {
    this.submitProductFormGroup.emit(this.productAddForm);
  }
}
