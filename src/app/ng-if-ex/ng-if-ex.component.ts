import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ex',
  templateUrl: './ng-if-ex.component.html',
  styleUrls: ['./ng-if-ex.component.css']
})
export class NgIfExComponent implements OnInit {
 isAvailable:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
