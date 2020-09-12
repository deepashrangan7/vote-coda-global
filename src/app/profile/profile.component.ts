import { CandidateService } from "./../service/candidate.service";
import { Component, OnInit } from "@angular/core";
import { Candidate } from "../modal/candidate";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor(private cs: CandidateService) {}
  candidate: Candidate;
  showSkills = false;
  editable = false;
  addSkill: boolean = false;
  ngOnInit() {
    this.cs.getProfile(sessionStorage.getItem("user")).subscribe((data) => {
      // console.log(data);

      this.candidate = data;
    });
  }

  edit(id) {
    this.editable = !this.editable;
    this.showSkills = false;
    this.addSkill = false;
  }

  addSkills(id) {
    this.addSkill = !this.addSkill;
    this.editable = false;
    this.showSkills = false;
  }
  show() {
    this.showSkills = !this.showSkills;
    this.editable = false;
    this.addSkill = false;
  }
}
