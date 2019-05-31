// original code from https://ng-bootstrap.github.io/#/components/table/examples
import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { GamePlaytime } from '../classes/GamePlaytime';
import { UserService } from './user.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';


@Component(
  {
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: []
  })


export class TableComponent {
  @Input() steam_id: string;
  gamePlaytimes: GamePlaytime[];
  total: number;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: UserService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.gamePlaytimes$.subscribe(gamePlaytimes => {
      this.gamePlaytimes = gamePlaytimes
    });
    this.service.total$.subscribe(total => {
      this.total = total;
    });
    
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