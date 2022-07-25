import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
 fullName:string='Bilal Khattak';

 currentDate:Date=new Date();

 price:number=3450;

 names:string[]=['bilal','fahad','ubaid'];

 obj={'rollno':101,'name':'bilal'};
  constructor() { }

  ngOnInit(): void {
  }

}
