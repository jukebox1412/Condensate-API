import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ChartData } from '../classes/ChartData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() pieData: ChartData;
  pieDatas: ChartData[];
  constructor(private _service: UserService) { }

  ngOnInit() {
    this._service.categories$.subscribe(pieDatas => this.pieDatas = pieDatas)
  }
}
