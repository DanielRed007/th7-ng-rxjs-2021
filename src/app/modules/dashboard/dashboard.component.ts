import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

import { STEP_ITEMS } from "../shared/multi-step/config/multi-step-config";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  multiStepConfig: any;
  formData: any;

  currentRoute: string = "ops1";
  routeConfig: any = {
    routes: [
      { route: "Multi Step Form", toRoute: "ops1" },
      { route: "Ops. #2", toRoute: "ops2" },
      { route: "Ops. #3", toRoute: "ops3" },
    ],
  };
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.multiStepConfig = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
  }

  goToRoute(route) {
    this.currentRoute = route;
  }
}
