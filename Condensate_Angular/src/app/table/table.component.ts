// original code from https://ng-bootstrap.github.io/#/components/table/examples
import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from './country';
import { UserService } from './user.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';


@Component(
  {
    selector: 'ngbd-table-complete',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: [UserService, DecimalPipe]
  })
  
export class NgbdTableComplete {
  countries: Game[];
  total: number;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: UserService) {
    service.countries$.subscribe(countries => this.countries = countries);
    service.total$.subscribe(total => this.total = total);
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}