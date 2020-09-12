import { AdminService } from "./../service/admin.service";
import { Candidate } from "./../modal/candidate";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-delete-candidate",
  templateUrl: "./delete-candidate.component.html",
  styleUrls: ["./delete-candidate.component.css"],
})
export class DeleteCandidateComponent implements OnInit {
  constructor(private admin: AdminService) {}
  allCandidate: Candidate[] = [];
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
