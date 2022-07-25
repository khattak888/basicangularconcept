import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { MonthComponent } from './month/month.component';
import { EmployeeComponent } from './employee/employee.component';
import { BookComponent } from './book/book.component';
import { MonthDropdownlistComponent } from './month-dropdownlist/month-dropdownlist.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CompositionComponent } from './composition/composition.component';
import { NgIfExComponent } from './ng-if-ex/ng-if-ex.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    MarksheetComponent,
    ProductComponent,
    StudentComponent,
    MonthComponent,
    EmployeeComponent,
    BookComponent,
    MonthDropdownlistComponent,
    EventBindingComponent,
    CompositionComponent,
    NgIfExComponent,
    PipesExampleComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
