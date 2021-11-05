import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Member } from '../common/member';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {

  member : Member;
  product: Product;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.member = new Member();
    this.product = new Product();
  }

  addProductFormGroup: FormGroup;

  ngOnInit(): void {

    this.addProductFormGroup = this.formBuilder.group({
      name: new FormControl('123', [Validators.required]),
      price: new FormControl('123', [Validators.required]),
      description: new FormControl('123', [Validators.required]),
      imageUrl: new FormControl('123', [Validators.required]),

      firstName: new FormControl('123', [Validators.required]),
      lastName: new FormControl('123', [Validators.required]),
      email: new FormControl('123', [Validators.required]),
      phone: new FormControl('425-866-5006', [Validators.required]),
    });
  }

  onSubmit() {

    this.member.firstName = this.addProductFormGroup.controls['firstName'].value;
    this.member.lastName = this.addProductFormGroup.controls['lastName'].value;
    this.member.email = this.addProductFormGroup.controls['email'].value;
    this.member.phone = this.addProductFormGroup.controls['phone'].value;
    this.product.name = this.addProductFormGroup.controls['name'].value;
    this.product.price = this.addProductFormGroup.controls['price'].value;
    this.product.description = this.addProductFormGroup.controls['description'].value;
    this.product.imageUrl = this.addProductFormGroup.controls['imageUrl'].value;
    this.product.member = this.member;
    this.productService.saveProduct(this.product).subscribe( result => this.toProductList());
    this.toProductList();
  }

  toProductList() {
    this.router.navigate(['/products']);
  }


}


