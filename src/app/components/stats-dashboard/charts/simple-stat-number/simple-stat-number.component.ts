import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-stat-number',
  templateUrl: './simple-stat-number.component.html',
  styleUrls: ['./simple-stat-number.component.scss']
})
export class SimpleStatNumberComponent implements OnInit {

  @Input() public title: string;

  @Input() public value: string;

  constructor() { }

  ngOnInit() {
  }

}
