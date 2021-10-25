import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-functions',
  templateUrl: './custom-functions.component.html',
  styleUrls: ['./custom-functions.component.css']
})
export class CustomFunctionsComponent implements OnInit {

vowelsCount = 0;
perValue: number;
numCount: number;
numBoolean: boolean;
strValue = 'Testing12345';
strReg = /[a-zA-Z]/g;
numReg = /[0-9]/g;
matchValue: any;
matchCount: any;
matchPercent: any;
stringValue: any;
strVowels = 0;

pswd: any;
password: any;
passwd = '!ABCDprem123';
pswdcharten: any;
pswdletanddigits: any;
pswd2digits: any;
pwdReg = '[^a-zA-Z0-9\s]';

rating: any[] = [7, 4 , 3, 0, 5, 2, 7, 9];
star: any[] = [];
ratstar: any[] = [];

fulldate: any;
date: Date;
dd: any;
mm: any;
yyyy: any;
leapyear: any;
leapnotyear: any;
daysInMonth: any;
getUTCDay: any;
monthName: any;
num = 1000;
primenumber: number;
prime: any[] = [];

constructor() { }

  ngOnInit(): void {
  this.getCountVowelsDigits();
  this.passwordValidation();
  this.getArrayInStars();
  this.checkDate();
  this.getPrimeNumbers();
}
  getCountVowelsDigits(): void {
      this.stringValue = this.strValue.match(this.strReg);
      // console.log(this.stringValue);
      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < this.stringValue.length; i++ ) {
          if ( this.stringValue[i] === 'a' || this.stringValue[i] === 'e' || this.stringValue[i] === 'i' || this.stringValue[i] === 'o'
          || this.stringValue[i] === 'u'){
            this.strVowels += 1;
            this.perValue = Math.round(this.strVowels / this.strValue.length * 100);
          }
      }
      this.matchValue = this.strValue.match(this.numReg);
      this.matchCount = this.matchValue.length;
      this.matchPercent = Math.round(this.matchCount / this.strValue.length * 100);
  }
      // Password Validation
      passwordValidation(): void {
        if ( this.passwd.length <= 10){
          this.pswdcharten = 'A password must have at least ten characters';
          }
        if ( this.passwd.match(this.pwdReg)) {
          this.pswdletanddigits = 'A password consist of only Letters and Digits';
        }
        if ( this.passwd.match(/[0-9]/g).length < 2 ) {
          this.pswd2digits = 'A password must contain at least 2 digits';
        }
      }
      getArrayInStars(): void {
        for ( let i = 0; i < this.rating.length; i++ ) {
          this.star[i] = '';
          for (let j = 0; j <= this.rating[i]; j++ ) {
            this.ratstar[i] = this.rating[i];
            if ( this.rating[i] === 0 ) {
              this.star[i] = '-';
            }else{
            this.star[i] += '*';
            }
          }
          console.log('\n');
        }
      }
    // Program 4
    checkDate(): void {
      this.date = new Date();
      this.dd = this.date.getDate();
      this.mm = this.date.getMonth();
      this.yyyy = this.date.getFullYear();
      this.fulldate = this.dd + '/' + this.mm + '/' + this.yyyy;
      if (((this.yyyy % 4 === 0) && (this.yyyy % 100 !== 0)) || (this.yyyy % 400 === 0)){
        this.leapyear = 'is "Leap year"';
      }else{
        this.leapyear = 'is not "Leap year"';
      }
      this.daysInMonth = new Date(this.yyyy, this.mm, 0).getDate();
      this.monthName = new Date(this.yyyy, this.mm, 0).toLocaleString('default', { month: 'long' });
    }

    getPrimeNumbers(): void{
      for ( let i = 2; i < this.num; i++){
        if (this.num % i === 0) {
          this.prime[i - 1] = i;
        }
      }
    }
}
