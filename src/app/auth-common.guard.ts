import { AdminService } from "./service/admin.service";
import { CandidateService } from "./service/candidate.service";
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
export class AuthCommonGuard implements CanActivate {
  constructor(
    private user: CandidateService,
    private router: Router,
    private admin: AdminService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user.isLoggedIn || this.admin.isLoggedIn) return true;
    else {
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
