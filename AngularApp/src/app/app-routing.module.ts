import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: 'search', component: SearchComponent, children: [
      { path: 'results', component: SearchResultsComponent }]
  },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
