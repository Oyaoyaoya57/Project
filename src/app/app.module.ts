import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizHistoryComponent } from './quiz-history/quiz-history.component';
import { UpcomingQuizComponent } from './upcoming-quiz/upcoming-quiz.component';
import { EnrolledQuizComponent } from './enrolled-quiz/enrolled-quiz.component';

@NgModule({
  declarations: [AppComponent, routingComponents, HomeComponent, DashboardComponent, AccountComponent, CreateQuizComponent, QuizHistoryComponent, UpcomingQuizComponent, EnrolledQuizComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
