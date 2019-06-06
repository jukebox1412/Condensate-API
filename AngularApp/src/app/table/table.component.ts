// original code from https://ng-bootstrap.github.io/#/components/table/examples
import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { GamePlaytime } from '../classes/GamePlaytime';
import { UserService } from '../user.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { ActivatedRoute, Router } from '@angular/router';


@Component(
  {
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: []
  })


export class TableComponent {
  steam_id: string;
  gamePlaytimes: GamePlaytime[];
  total: number;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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