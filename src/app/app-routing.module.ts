import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import {PolparComponent} from '../app/polpar/polpar.component'
import {CandidatesComponent} from '../app/candidates/candidates.component'

const routes: Routes = [{path:'',component:LoginComponent},{path:'political-party',component:PolparComponent},{path:'county-candidates',component:CandidatesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
