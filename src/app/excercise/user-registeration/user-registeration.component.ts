import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {

  userregistFrom: FormGroup;
  titles: any[] = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];
  isValidFormSubmitted = null;
  userregist: any = {};
  private userTitle: string;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.userregistFrom = this.builder.group({
      title: new FormControl('', Validators.required),
      firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]),
      cnfemail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]),
      password: new FormControl('', [Validators.required, Validators.minLength(10)]),
      confpassword: new FormControl('', [Validators.required, Validators.minLength(10)]),
      termsandcond: new FormControl('', Validators.required)
     }, {
       validator: [this.emailMatchValidator('email', 'cnfemail'),
                   this.passwordMatchValidator('password', 'confpassword')]
     });
     /*this.userregistFrom = this.formbuilder.group({
      title: ['', Validators.required],
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      confpassword: ['', [Validators.required, Validators.minLength(10)]],
      termsandcond: ['', Validators.required]
     }, {
       validator: this.emailMatchValidator('email', 'confemail')
     });*/
  }
  get user(): any {
    return this.userregistFrom.controls;
  }
  userRegisteration(){
    this.isValidFormSubmitted = false;
    if ( this.userregistFrom.valid ) {
    this.userregist = this.userregistFrom.value;
    console.log(this.userregist);
    }
    this.isValidFormSubmitted = true;
  }
// Email & COnfirm mail validator
  emailMatchValidator(email: string, cnfemail: string){
    return(userregistFrom: FormGroup) => {
      const useremail = userregistFrom.controls[email];
      const confirmemail = userregistFrom.controls[cnfemail];
      if (useremail.value  !== confirmemail.value){
        confirmemail.setErrors({emailNotMatched: true});
      }
    };
}
passwordMatchValidator(password: string, confpassword: string){
  return(userregistFrom: FormGroup) => {
    const passwd = userregistFrom.controls.password;
    const cnfpassword = userregistFrom.controls.confpassword;
    console.log(passwd);
    console.log(cnfpassword);
    if (passwd.value  !== cnfpassword.value){
      cnfpassword.setErrors({passwordNotMatched: true});
    }
  };
}

}
