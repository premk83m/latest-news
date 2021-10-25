import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  cartpaymentForm: FormGroup;
  isValidFormSubmitted = null;
  cartPay: any = {};
  phonePattern = '^[0-9]\d*$';

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.cartpaymentForm = this.builder.group({
      flname: new FormControl('', [Validators.required, Validators.minLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]),
      cnfemail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]),
      phone: new FormControl('', [Validators.required, Validators.minLength(14), Validators.pattern(/^[0-9]\d*$/)]),
      addresses: this.builder.group({
          address: new FormControl('', [Validators.required, Validators.maxLength(250)]),
          postcode: new FormControl('', [Validators.required, Validators.minLength(6)]),
          country: new FormControl('', Validators.required)
        }),
      cardType: new FormControl('', Validators.required),
      cardnum: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(19)]),
      secucode: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nameoncard: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }
  get cart(){
    return this.cartpaymentForm.controls;
  }
  get addresses(){
    const addr = this.cartpaymentForm.controls.addresses as FormGroup;
    return addr.controls;
  }
  cartpaymentMethod(){
    this.isValidFormSubmitted = false;
    if ( this.cartpaymentForm.valid ) {
      this.cartPay = this.cartpaymentForm.value;
      console.log(this.cartPay);
    }
    this.isValidFormSubmitted = true;
  }
}
