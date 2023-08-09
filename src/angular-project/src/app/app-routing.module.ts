import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './main/create-team/create-team.component';
import { TorneioComponent } from './main/torneio/torneio.component';

const routes: Routes = [
  {path: '', component: CreateTeamComponent},
  {path: 'torneio', component: TorneioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
