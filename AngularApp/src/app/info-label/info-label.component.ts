import { Component, OnInit } from '@angular/core';
import { UserService, Stats } from '../user.service';

@Component({
  selector: 'app-info-label',
  templateUrl: './info-label.component.html',
  styleUrls: ['./info-label.component.css']
})
export class InfoLabelComponent implements OnInit {
  stats: Stats

  /**
   * Currently displays info about total hours, total price, and total hours / total price (average)
   * @param _service 
   */
  constructor(private _service: UserService) { }

  ngOnInit() {
    this._service.stats$.subscribe(stats => this.stats = stats);
  }
}
