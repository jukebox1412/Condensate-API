import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NgbdTableComplete } from './table/table.component';
import { NgbdSortableHeader } from './table/sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NgbdTableComplete,
    NgbdSortableHeader,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
