import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpropertiesComponent } from './editproperties/editproperties.component';

const routes: Routes = [
  {path:'edit/:id', component: EditpropertiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
