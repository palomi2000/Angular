import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleRegistrationComponent } from '../components/common/sample-registration/sample-registration.component';

const routes: Routes = [
   { path: '', component: SampleRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
