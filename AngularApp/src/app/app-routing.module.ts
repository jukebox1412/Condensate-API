import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'table', component: TableComponent, outlet: "main" },
  { path: 'search', component: SearchComponent},
  // { path: '**', component: PageNotFoundComponent },
  // { path: '', redirectTo: '/search', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
