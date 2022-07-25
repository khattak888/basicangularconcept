import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {
  person1:Person={'name':'bilal khattak','contact':585458,'job':{'designation':'CEO','salary':7865}}
  constructor() { }

  ngOnInit(): void {
  }

}
