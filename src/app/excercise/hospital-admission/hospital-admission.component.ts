import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-hospital-admission',
  templateUrl: './hospital-admission.component.html',
  styleUrls: ['./hospital-admission.component.css']
})
export class HospitalAdmissionComponent implements OnInit {

  hospitalAdmiz: FormGroup;
  cityList: any[] = ['Tirunelveli', 'Tenkasi', 'Thoothukudi', 'Kanyakumari', 'Tiruvandram', 'Kakinada', 'Naloor', 'Bhobal'];
  stateList: any[] = ['Tamilnadu', 'Kerala', 'Andrapradesh', 'MP'];
  admissionTbl: any = {};
  admissionTbll: any = {};
  isValidFormSubmitted = null;

  userregist: any = {};
  constructor(private builder: FormBuilder) { }

  get f() {
     return this.hospitalAdmiz.controls;
  }
  get general_info() {
    return this.hospitalAdmiz.controls;
 }
 get emergency(){
   const emergen = this.hospitalAdmiz.controls.emergency as FormGroup;
   return emergen.controls;
 }
 get geninfo(){
  const geninfo = this.hospitalAdmiz.controls.general_info as FormGroup;
  return geninfo.controls;
}
get geninfoname(){
  const geninfoname = this.hospitalAdmiz.controls.general_info as FormGroup;
  const name =  geninfoname.controls.name as FormGroup;
  return name.controls;
  console.log(name.controls.flname);
}
get geninfophone(){
  const geninfophone = this.hospitalAdmiz.controls.general_info as FormGroup;
  const phone =  geninfophone.controls.phone as FormGroup;
  return phone.controls;
}
get geninfoaddr(){
  const geninfoaddr = this.hospitalAdmiz.controls.general_info as FormGroup;
  const address =  geninfoaddr.controls.addresses as FormGroup;
  return address.controls;
}
  ngOnInit(): void {
    this.hospitalAdmiz = this.builder.group({
            date: new FormControl('', [Validators.required, Validators.pattern(/^[0-9\d.\/_]*$/)]),
              general_info: this.builder.group({
                        name: this.builder.group({
                          flname: new FormControl('', [Validators.required, Validators.minLength(5)]),
                          lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
                        }),
                  yourid: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.pattern(/^[A-Za-z]{2}[0-9]{4}/)]),
                  dob: new FormControl('', [Validators.required, Validators.pattern(/^[0-9\d.\/_]*$/)]),
                  sex: new FormControl('', Validators.required),
                            phone: this.builder.group({
                            areacode: new FormControl('', [Validators.required, Validators.maxLength(4),
                            Validators.pattern(/^\+[0-9\d]*$/)]),
                            phnumb: new FormControl('', [Validators.required, Validators.maxLength(12),
                            Validators.pattern(/^[0-9\s\d.\-_]*$/)])
                            }),
                            addresses: this.builder.group({
                              address: new FormControl('', [Validators.required, Validators.maxLength(250)]),
                              city: new FormControl('', Validators.required),
                              state: new FormControl('', Validators.required),
                              postalcode: new FormControl('', [Validators.required, Validators.maxLength(6)]),
                          }),
                  emailad: new FormControl('', [Validators.required, Validators.email]),
                  confirmemailad: new FormControl('', [Validators.required, Validators.email]),
                }),
            emergency: this.builder.group({
                emname: new FormControl('', [Validators.required, Validators.minLength(10)]),
                emareacode: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.pattern(/^\+[0-9\d]*$/)]),
                emphnumb: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern(/^[0-9\s\d.\-_]*$/)]),
                relate: new FormControl('', [Validators.required, Validators.maxLength(10)])
            })
    });
  }

  hospitalSubmitForm(){
    this.isValidFormSubmitted = false;
    if ( this.hospitalAdmiz.valid ) {
    this.admissionTbl = this.hospitalAdmiz.value;
    console.log(this.admissionTbl);
    }
    this.isValidFormSubmitted = true;
  }

  // isValidnumber(hospitalAdmiz: AbstractControl){
  //   this.admissionTbll = this.hospitalAdmiz.value;
  //   console.log(this.admissionTbll.phnumb);
  // }

  resetData(){

  }
}
