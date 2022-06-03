import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SearchBarComponent } from './search-bar.component';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchBarRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ]
})
export class SearchBarModule { }
