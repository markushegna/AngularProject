import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutComponent} from './pages/about/about.component';
import {CourseComponent} from './pages/course/course.component';
import {QuizComponent} from './pages/quiz/quiz.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'course', component: CourseComponent},
  {path: 'quiz', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutComponent, CourseComponent, QuizComponent];
