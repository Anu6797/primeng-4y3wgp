import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/primeng'; 
import {DataTableModule} from 'primeng/primeng'; 
import {MenuItem} from 'primeng/primeng';   

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DataTableModule ],
  declarations: [ AppComponent, HelloComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
