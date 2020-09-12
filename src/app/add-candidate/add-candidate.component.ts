import { Router } from "@angular/router";
import { AdminService } from "./../service/admin.service";
import { Candidate } from "./../modal/candidate";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-candidate",
  templateUrl: "./add-candidate.component.html",
  styleUrls: ["./add-candidate.component.css"],
})
export class AddCandidateComponent implements OnInit {
  constructor(private admin: AdminService, private router: Router) {}
  candidate: Candidate = new Candidate();
  ngOnInit() {}
  msg: string;
  loading = false;
  add() {
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
      this.loading = true;
      this.msg = undefined;
      this.admin.addCandidate(this.candidate).subscribe((user) => {
        this.loading = false;
        if (user != null && user != undefined) {
          alert(
            "candidate added succesfully password sent to the mail address"
          );
          this.router.navigateByUrl("/admin");
        } else {
          this.msg = "Email Id already taken provide valid information";
        }
      });
    } else {
      this.msg = "fill valid  details";
    }
  }
}
