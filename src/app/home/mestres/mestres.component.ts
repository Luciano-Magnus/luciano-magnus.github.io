import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mestres',
  templateUrl: './mestres.component.html',
  styleUrls: ['./mestres.component.css']
})
export class MestresComponent implements OnInit {

  breakpoint: number = 1;
  width: number = 0;

  ngOnInit() {
    this.breakpoint = this.getSize(window.innerWidth);
    this.width = window.innerWidth;
  }

  onResize(event: any) {
    this.breakpoint = this.getSize(event.target.innerWidth);
    this.width = event.target.innerWidth;
  }

  private getSize(width: number): number {
    console.log(width);
    if (width <= 900) {
      return 1;
    } else if (width <= 1200) {
      return 2;
    } else if (width <= 1550) {
      return 3;
    } else {
      return 4;
    }
  }
}
