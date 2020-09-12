import { Router } from "@angular/router";
import { CandidateService } from "./../service/candidate.service";
import { Skill } from "./../modal/skill";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-add-skills",
  templateUrl: "./add-skills.component.html",
  styleUrls: ["./add-skills.component.css"],
})
export class AddSkillsComponent implements OnInit {
  @Input() id: number;
  constructor(private user: CandidateService, private router: Router) {}
  skill: Skill = new Skill();
  ngOnInit() {}
  msg: string;
  addSkill() {
    if (
      this.skill.rating != undefined &&
      this.skill.rating >= 1 &&
      this.skill.rating <= 5 &&
      this.skill.course != undefined &&
      this.skill.course.length >= 2
    ) {
      this.user.addSkill(this.skill, this.id).subscribe((data) => {
        // console.log(data);
        if (data.message === "Skill added succesfully") {
          alert("skills added successfully");
          this.router.navigateByUrl("/user");
        } else {
          alert("unable to add skills try again later");
        }
      });
    } else {
      this.msg = "Enter proper credentials";
    }
  }
}
