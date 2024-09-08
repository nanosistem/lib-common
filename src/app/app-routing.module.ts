import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertDemoComponent } from './showcase/alert-demo/alert-demo.component';

const routes: Routes = [
  { path: 'alert', component: AlertDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
