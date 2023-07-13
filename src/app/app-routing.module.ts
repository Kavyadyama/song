import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KannadaComponent } from './kannada/kannada.component';
import { EnglishComponent } from './english/english.component';
import { SingerComponent } from './singer/singer.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {path:'kannada',component:KannadaComponent},
  {path:'english',component:EnglishComponent},
  {path:'singer',component:SingerComponent},
  {path:'types',component:TypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
