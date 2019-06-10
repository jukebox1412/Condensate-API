import { Component, OnInit } from '@angular/core';
import { UserService, Stats } from '../services/user.service';

@Component({
  selector: 'app-info-label',
  templateUrl: './info-label.component.html',
  styleUrls: ['./info-label.component.css']
})
export class InfoLabelComponent implements OnInit {
  stats: Stats

  /**
   * Currently displays info about total hours, total price, and total hours / total price (average)
   * @param service 
   */
  constructor(public service: UserService) { }

  ngOnInit() {
    this.service.stats$.subscribe(stats => this.stats = stats);
  }
}
