import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CandidatehomeComponent } from "./candidatehome/candidatehome.component";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { VoteComponent } from './vote/vote.component';
import { DisplayCandidateComponent } from './display-candidate/display-candidate.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { SeevotesComponent } from './seevotes/seevotes.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CandidatehomeComponent,
    AdminhomeComponent,
    AddCandidateComponent,
    DeleteCandidateComponent,
    VoteComponent,
    DisplayCandidateComponent,
    ProfileComponent,
    SkillsComponent,
    EditprofileComponent,
    AddSkillsComponent,
    SeevotesComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
