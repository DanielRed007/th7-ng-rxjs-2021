import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { UserGuard } from './guards/user.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './modules/shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
