import { CandidateService } from "./service/candidate.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthCandidateGuard implements CanActivate {
  constructor(private user: CandidateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user.isLoggedIn) return true;
    else {
      this.router.navigateByUrl("/login/0");
      return false;
    }
  }
}
