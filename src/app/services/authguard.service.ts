import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router'
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {USerServiceService} from './user-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router, private USerServiceService: USerServiceService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const CurrentUser = this.USerServiceService.currentUserValue;
    if(CurrentUser){
      return true;
    }
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
