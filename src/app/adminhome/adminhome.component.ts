import { AdminService } from "./../service/admin.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-adminhome",
  templateUrl: "./adminhome.component.html",
  styleUrls: ["./adminhome.component.css"],
})
export class AdminhomeComponent implements OnInit {
  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit() {}

  addCandidate() {
    this.router.navigateByUrl("/add");
  }
  deleteCandidate() {
    this.router.navigateByUrl("/delete");
  }
  vote() {
    this.router.navigateByUrl("/vote");
  }

  logout() {
    this.admin.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}
