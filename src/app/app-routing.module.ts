import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutComponent} from './pages/about/about.component';
import {CourseComponent} from './pages/course/course.component';
import {QuizComponent} from './pages/quiz/quiz.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, data: {animationState: 'One'}}, // data: {animationState: 'One'}
  {path: 'about', component: AboutComponent, data: {animationState: 'Two'}},
  {path: 'course', component: CourseComponent, data: {animationState: 'Three'}},
  {path: 'quiz', component: QuizComponent, data: {animationState: 'Four'}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomePageComponent, AboutComponent, CourseComponent, QuizComponent, PageNotFoundComponent];
