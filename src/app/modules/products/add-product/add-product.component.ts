import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public nameIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'font'],
  };

  public productAddForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.productAddForm = new FormGroup({
      productName: new FormControl('', Validators.required),
    });
  }
}
