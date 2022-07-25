import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 clickEventHandler(): void {
 console.debug("Event Clicked")
 }

 changeEventHandler(): void {
  console.debug("Event Changed")
  
}
}
