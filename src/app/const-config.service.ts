import { Injectable } from '@angular/core';
import { configuration } from './constant-config';

@Injectable({
  providedIn: 'root'
})
export class ConstConfigService {

  constconfig = configuration;

  constructor() { }

  getconstConfig(){
    return this.constconfig;
  }

}
