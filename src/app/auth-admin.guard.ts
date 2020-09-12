import { AdminService } from "./service/admin.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthAdminGuard implements CanActivate {
  constructor(private admin: AdminService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.admin.isLoggedIn) return true;
    else {
      this.router.navigateByUrl("/login/1");
      return false;
    }
  }
}
