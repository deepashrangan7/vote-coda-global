import { VoteCount } from "./../modal/vote-count";
import { VoteComponent } from "./../vote/vote.component";
import { Router } from "@angular/router";
import { AdminService } from "./../service/admin.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-seevotes",
  templateUrl: "./seevotes.component.html",
  styleUrls: ["./seevotes.component.css"],
})
export class SeevotesComponent implements OnInit {
  constructor(private admin: AdminService, private router: Router) {}

  allVotes: VoteCount[] = [];
  ngOnInit() {
    this.admin.getVotescount().subscribe((data) => {
      this.allVotes = data;
    });
  }

  logout() {
    this.admin.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}
