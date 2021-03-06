import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResumeComponent } from './resume-module/create-resume/create-resume.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: CreateResumeComponent,
  },
  {
    path: 'create',
    component: CreateResumeComponent,
  },
  {
    path: 'about',
    component: CreateResumeComponent,
  },
  {
    path: 'help',
    component: CreateResumeComponent,
  },
  {
    path: '**',
    component: CreateResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
