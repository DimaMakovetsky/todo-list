import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-progress',
  templateUrl: './todo-progress.component.html',
  styleUrls: ['./todo-progress.component.scss']
})
export class TodoProgressComponent implements OnChanges {
  @Input() currentNumber:number;

  public totalNumber:number=5;
  public gradient:string;

  ngOnChanges(changes:SimpleChanges):void
  {
    if(changes["currentNumber"])
    {
      const persent=this.currentNumber/this.totalNumber*100;
      this.gradient=`linear-gradient(90deg, black ${persent}%, #ccc ${persent}%)`;
    }
  }
}
