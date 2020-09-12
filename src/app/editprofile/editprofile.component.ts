import { CandidatehomeComponent } from "./../candidatehome/candidatehome.component";
import { CandidateService } from "./../service/candidate.service";
import { Router } from "@angular/router";
import { Candidate } from "./../modal/candidate";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"],
})
export class EditprofileComponent implements OnInit {
  constructor(private router: Router, private user: CandidateService) {}
  msg: string;
  @Input() candidate1: Candidate;
  candidate: Candidate;

  ngOnInit() {
    // console.log(this.candidate1);
    this.candidate = { ...this.candidate1 };
    // console.log(this.candidate);
  }

  save() {
    if (
      this.candidate.email != undefined &&
      this.candidate.password != undefined &&
      this.candidate.username != undefined &&
      this.candidate.experiseLevel != undefined &&
      this.candidate.noOfChallengesSolved != undefined &&
      this.candidate.experiseLevel >= 1 &&
      this.candidate.experiseLevel <= 5 &&
      this.candidate.noOfChallengesSolved >= 0 &&
      this.candidate.password.length >= 3 &&
      this.candidate.username.length >= 2
    ) {
      // console.log(this.candidate);
      this.user.saveCandidate(this.candidate).subscribe((user) => {
        if (user != null && user != undefined) {
          alert("Changed saved");
          this.router.navigateByUrl("/user");
        } else {
          this.msg = "Provide correct credentials";
        }
      });
    } else {
      this.msg = "fill valid  details";
    }
  }
}
