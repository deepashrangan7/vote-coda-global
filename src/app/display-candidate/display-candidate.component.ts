import { Router } from "@angular/router";
import { AdminService } from "./../service/admin.service";
import { Candidate } from "./../modal/candidate";
import { Component, OnInit, Input } from "@angular/core";
import { Response } from "../modal/response";

@Component({
  selector: "app-display-candidate",
  templateUrl: "./display-candidate.component.html",
  styleUrls: ["./display-candidate.component.css"],
})
export class DisplayCandidateComponent implements OnInit {
  @Input() candidate: Candidate;
  @Input() delete: boolean;
  @Input() id: number;
  @Input() vote: boolean;

  alreadyVoted: boolean;
  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit() {
    {
      let id = parseInt(sessionStorage.getItem("user"));

      if (this.admin.isLoggedIn) {
        id = 0;
      }
      this.admin.alreadyVoted(id).subscribe((data) => {
        // console.log(data);
        if (data == true) this.alreadyVoted = false;
        else this.alreadyVoted = true;
      });
    }
  }

  deleteCandidate() {
    this.admin.delete(this.candidate.id).subscribe((data) => {
      // console.log(data);
      this.router.navigateByUrl("/admin");
    });
  }

  voteCandidate() {
    let id = parseInt(sessionStorage.getItem("user"));

    if (this.admin.isLoggedIn) {
      id = 0;
    }
    this.admin.castVote(id, this.candidate.id).subscribe((data: Response) => {
      if (data.message) {
        alert("your vote casted succesfully for " + this.candidate.username);
        if (id == 0) this.router.navigateByUrl("/admin");
        else this.router.navigateByUrl("/user");
      } else {
        alert("sorry unable to cast vote right now try again later");
        if (id == 0) this.router.navigateByUrl("/admin");
        else this.router.navigateByUrl("/user");
      }
    });
  }
}
