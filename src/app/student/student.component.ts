import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit 
{
  rollno:number=101;
  name:string='bilal khattak';
  isPassed:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
