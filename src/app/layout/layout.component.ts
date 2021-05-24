import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  currentNumber = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
