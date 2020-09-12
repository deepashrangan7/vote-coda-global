import { AdminService } from "./../service/admin.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CandidateService } from "../service/candidate.service";
import { Admin } from "../modal/admin";
import { Candidate } from "../modal/candidate";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private admin: AdminService,
    private user: CandidateService
  ) {}
  msg: string;
  isAdmin: boolean = false;
  emailId: string;
  password: string;
  ngOnInit() {
    this.ar.paramMap.subscribe((params) => {
      let id: number = parseInt(params.get("id"));
      if (id == 1) this.isAdmin = true;
      else this.isAdmin = false;
    });
  }
  login() {
    if (this.isAdmin == true) {
      this.admin.validate(new Admin(this.password)).subscribe((data) => {
        if (data.validAdmin) {
          this.admin.isLoggedIn = true;
          this.router.navigateByUrl("/admin");
        }
        this.msg = "Admin password doesn't match";
      });
    } else {
      //candidate
      let candidate = new Candidate();
      candidate.email = this.emailId;
      candidate.password = this.password;
      this.user.validate(candidate).subscribe((data) => {
        if (data == null || data == undefined) {
          this.msg = "Email and password doesn't match";
        } else {
          this.user.isLoggedIn = true;
          sessionStorage.setItem("user", data.id + "");
          this.router.navigateByUrl("/user");
        }
      });
    }
  }
}
