import { Component, OnInit } from '@angular/core';
import { Month } from './month';

@Component({
  selector: 'app-month-dropdownlist',
  templateUrl: './month-dropdownlist.component.html',
  styleUrls: ['./month-dropdownlist.component.css']
})
export class MonthDropdownlistComponent implements OnInit {

  months:Month[]=[
    {name:'jan' , no:1},
    {name:'feb' , no:2},
    {name:'march' , no:3},
    {name:'april' , no:4},
    {name:'may' , no:5},
    {name:'june' , no:6},
    {name:'july' , no:7},
    {name:'aug' , no:8},
    {name:'sep' , no:9},
    {name:'oct' , no:10},
    {name:'nov' , no:11},
    {name:'dec' , no:12},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
