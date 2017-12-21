import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { User } from './models/user';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { TrackComponent } from './track/track.component';
import { IndexComponent } from './index/index.component';
import { WorkoutService  } from './models/workout.service';
import { LoginrComponent } from './loginr/loginr.component';
import { SeeOthersComponent } from './seeothers/seeothers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    TrackComponent,
    IndexComponent,
    LoginrComponent,
    SeeOthersComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
        { path: "track", component: TrackComponent },
        { path: "home", component: IndexComponent },
        { path: "login", component: LoginrComponent },
        { path: "seeothers", component: SeeOthersComponent},
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ WorkoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
