import { AdminService } from "./../service/admin.service";
import { Router } from "@angular/router";
import { Candidate } from "./../modal/candidate";
import { Component, OnInit } from "@angular/core";
import { CandidateService } from "../service/candidate.service";

@Component({
  selector: "app-candidatehome",
  templateUrl: "./candidatehome.component.html",
  styleUrls: ["./candidatehome.component.css"],
})
export class CandidatehomeComponent implements OnInit {
  constructor(
    private admin: AdminService,
    private router: Router,
    private user: CandidateService
  ) {}

  allCandidate: Candidate[] = [];

  ngOnInit() {
    this.admin.getAllCandidates().subscribe((data) => {
      this.allCandidate = data;
      // console.log(data);
    });
  }

  value: number;

  val(id: number) {
    if (this.value == id) this.value = undefined;
    else this.value = id;
  }

  logout() {
    this.user.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}
