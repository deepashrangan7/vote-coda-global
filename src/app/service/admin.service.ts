import { VoteCount } from "./../modal/vote-count";
import { backendurl } from "./../URL";
import { VoterBook } from "./../modal/voter-book";
import { Candidate } from "./../modal/candidate";
import { Status } from "./../modal/status";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Admin } from "../modal/admin";
import { Response } from "../modal/response";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn: boolean = false;

  url: string = backendurl;

  validate(admin: Admin) {
    return this.http.post<Status>(this.url + "/admin/validate", admin);
  }

  alreadyVoted(id) {
    return this.http.get(this.url + "/admin/voted/" + id);
  }

  addCandidate(candidate: Candidate) {
    return this.http.post(this.url + "/admin/add", candidate);
  }

  getAllCandidates() {
    return this.http.get<Candidate[]>(this.url + "/candidate/all");
  }

  delete(id: number) {
    return this.http.delete<Response>(
      this.url + "/admin/delete/candidate/" + id
    );
  }

  castVote(vid, pid) {
    let voter = new VoterBook();
    voter.participanId = pid;
    voter.voterId = vid;
    return this.http.post<Response>(this.url + "/vote", voter);
  }
  getVotescount() {
    return this.http.get<VoteCount[]>(this.url + "/admin/votes");
  }
}
