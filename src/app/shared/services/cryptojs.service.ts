import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptojsService {

  secretKey = "Pass@123#"

  constructor() { }


  decryptLocalLPassStorage() {
    if(localStorage.getItem("lpassword") == null){
      return null
    }else{
      let localData = localStorage.getItem("lpassword") || '';
      const decryptedBytes = CryptoJS.AES.decrypt(localData, "Pass@123#")
      let data = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(data)
    }  
  }

  encryptLocalLPassStorage(data: any) {
    if (typeof data == typeof 'String') {
      let encryptedData = CryptoJS.AES.encrypt(data, "Pass@123#").toString();
      localStorage.setItem("lpassword", encryptedData)
    } else {
      data = JSON.stringify(data)
      let encryptedData = CryptoJS.AES.encrypt(data, "Pass@123#").toString();
      localStorage.setItem("lpassword", encryptedData)
    }
  }

  
}
