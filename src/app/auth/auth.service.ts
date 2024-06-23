import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(usuario:String,password:String){
    sessionStorage.setItem("isLogged","true");
  }
  logout():void{
    sessionStorage.clear();
  }
  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }

}
