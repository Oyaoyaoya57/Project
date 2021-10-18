import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrolledQuizComponent } from './enrolled-quiz/enrolled-quiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizHistoryComponent } from './quiz-history/quiz-history.component';
import { SignupComponent } from './signup/signup.component';
import { UpcomingQuizComponent } from './upcoming-quiz/upcoming-quiz.component';
const routes: Routes = [
  { path: 'EnrolledQuiz', component: EnrolledQuizComponent },
  { path: 'UpcomingQuiz', component: UpcomingQuizComponent },
  { path: 'QuizHistory', component: QuizHistoryComponent },
  { path: 'CreateQuiz', component: CreateQuizComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  SignupComponent,
  HomeComponent,
  AccountComponent,
  CreateQuizComponent,
  QuizHistoryComponent,
  DashboardComponent,
];
