import { Router } from "@angular/router";
import { AdminService } from "./../service/admin.service";
import { Candidate } from "./../modal/candidate";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit {
  allCandidate: Candidate[] = [];
  constructor(private admin: AdminService, private router: Router) {}
  value: number;
  ngOnInit() {
    this.admin.getAllCandidates().subscribe((data) => {
      this.allCandidate = data;
    });
  }

  val(id: number) {
    if (this.value == id) this.value = undefined;
    else this.value = id;
  }
}
