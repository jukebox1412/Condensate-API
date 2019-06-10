import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ChartData } from '../classes/ChartData';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ChartComponent implements OnInit {
  @Input() pieData: ChartData;
  pieDatas: ChartData[];
  constructor(private _service: UserService) { }

  ngOnInit() {
    this._service.categories$.subscribe(pieDatas => this.pieDatas = pieDatas)
  }

}
