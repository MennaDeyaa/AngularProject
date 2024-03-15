import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpproductService } from '../../services/httpproduct.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
})
export class NewProductComponent {
  ProductFormTest!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private httpservice: HttpproductService
  ) {}
  ngOnInit(): void {
    this.ProductFormTest = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imgURL: ['', Validators.required],
      categoryID: ['', Validators.required],
      description: ['', Validators.required],
      matrial: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  onSubmit() {
    this.httpservice.AddProduct(this.ProductFormTest.value).subscribe((p) => {
      'Product Added Successfully';
    });
  }
  CheckForErrors(controlName: string, errorname: string) {
    return (
      this.ProductFormTest.controls[controlName].dirty &&
      this.ProductFormTest.controls[controlName].touched &&
      this.ProductFormTest.controls[controlName].errors?.[errorname]
    );
  }
}
