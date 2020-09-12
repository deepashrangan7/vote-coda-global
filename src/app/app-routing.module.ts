import { AuthCommonGuard } from "./auth-common.guard";
import { AuthCandidateGuard } from "./auth-candidate.guard";
import { ErrorComponent } from "./error/error.component";
import { SeevotesComponent } from "./seevotes/seevotes.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthAdminGuard } from "./auth-admin.guard";
import { VoteComponent } from "./vote/vote.component";
import { DeleteCandidateComponent } from "./delete-candidate/delete-candidate.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { CandidatehomeComponent } from "./candidatehome/candidatehome.component";
import { AddCandidateComponent } from "./add-candidate/add-candidate.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/:id", component: LoginComponent },
  {
    path: "admin",
    component: AdminhomeComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: "user",
    component: CandidatehomeComponent,
    canActivate: [AuthCandidateGuard],
  },
  {
    path: "add",
    component: AddCandidateComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: "delete",
    component: DeleteCandidateComponent,
    canActivate: [AuthAdminGuard],
  },
  { path: "vote", component: VoteComponent, canActivate: [AuthCommonGuard] },
  {
    path: "votes",
    component: SeevotesComponent,
    canActivate: [AuthAdminGuard],
  },

  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthCandidateGuard],
    children: [{ path: "skills", component: SkillsComponent }],
  },
  {
    path: "**",
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
