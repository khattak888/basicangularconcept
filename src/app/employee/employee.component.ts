import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit
 {
  emp:Employee={'name':'Bilal Khattak','email':'bilal@gmail.com','contact':999};

  constructor() { }

  ngOnInit(): void {
  }

}
