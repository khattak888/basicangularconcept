import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit
 {
     books:Book[]=[
      {'title':'C','author':'bilal khattak','pages':500,'price':1000},
      {'title':'java','author':'ubaid','pages':4000,'price':5000},
      {'title':'javascript','author':'fahad','pages':4500,'price':5600},
      {'title':'C++','author':'hamza','pages':300,'price':500},
      {'title':'kotlin','author':'irfan bhai','pages':150,'price':20000},
      {'title':'angular','author':'zeeshan bhai','pages':700,'price':10000},
     ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
