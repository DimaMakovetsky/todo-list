import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard 
{

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean
  {
    if(localStorage.getItem("userEmail"))
    {
      return true;
    }
    else
    {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
