import { Component, OnInit } from "@angular/core";
import { RouteReuseStrategy, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    sessionStorage.clear();
  }

  choose(id: number) {
    this.router.navigate(["login", id]);
  }
}
