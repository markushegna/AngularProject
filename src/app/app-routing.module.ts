import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutComponent} from './pages/about/about.component';
import {CourseComponent} from './pages/course/course.component';
import {QuizComponent} from './pages/quiz/quiz.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, data: { animationState: 'One' } },
  {path: 'about', component: AboutComponent,  data: { animationState: 'Two' } },
  {path: 'course', component: CourseComponent, data: { animationState: 'Three' } },
  {path: 'quiz', component: QuizComponent, data: { animationState: 'Four' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutComponent, CourseComponent, QuizComponent];
