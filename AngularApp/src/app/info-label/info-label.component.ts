import { Component, OnInit } from '@angular/core';
import { UserService, Stats } from '../user.service';

@Component({
  selector: 'app-info-label',
  templateUrl: './info-label.component.html',
  styleUrls: ['./info-label.component.css']
})
export class InfoLabelComponent implements OnInit {
  stats: Stats

  constructor(private _service: UserService) { }

  ngOnInit() {
    this._service.stats$.subscribe(stats => this.stats = stats);
  }
}
