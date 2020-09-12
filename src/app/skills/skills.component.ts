import { Skill } from "./../modal/skill";
import { Component, OnInit, Input } from "@angular/core";
import { CandidateService } from "../service/candidate.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  constructor(private cs: CandidateService) {}

  @Input() id: number;

  skills: Skill[];
  ngOnInit() {
    this.cs.getSkills(this.id).subscribe((data) => {
      this.skills = data;
    });
  }
}
