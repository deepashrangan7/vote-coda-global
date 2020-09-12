import { Skill } from "./../modal/skill";
import { backendurl } from "./../URL";
import { Candidate } from "./../modal/candidate";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "../modal/response";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  url: string = backendurl;
  validate(candidate: Candidate) {
    return this.http.post<Candidate>(this.url + "/candidate/login", candidate);
  }

  getProfile(id) {
    return this.http.get<Candidate>(this.url + "/candidate/profile/" + id);
  }

  addSkill(skill: Skill, id: number) {
    return this.http.post<Response>(
      this.url + "/candidate/addskill/" + id,
      skill
    );
  }
  getSkills(id) {
    return this.http.get<Skill[]>(this.url + "/candidate/profile/skills/" + id);
  }
  saveCandidate(candidate: Candidate) {
    return this.http.put<Candidate>(
      this.url + "/candidate/profile/edit/" + candidate.id,
      candidate
    );
  }
}
