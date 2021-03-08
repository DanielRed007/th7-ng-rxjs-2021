import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./content/content.component";
import { MultiStepComponent } from "../shared/multi-step/multi-step.component";
import { HeaderComponent } from "../shared/header/header.component";

import { FormatTitlePipe } from "../../pipes/format-title.pipe";

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ContentComponent,
    MultiStepComponent,
    HeaderComponent,
    FormatTitlePipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
