import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentRoute: string = 'ops1';
  routeConfig: any = {
    routes: [
      { route: 'Multi Step Form', toRoute: 'ops1' },
      { route: 'Ops. #2', toRoute: 'ops2' },
      { route: 'Ops. #3', toRoute: 'ops3' },
    ],
  };
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  goToRoute(route) {
    this.currentRoute = route;
  }
}
