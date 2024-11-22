import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MyLibModule } from '../../projects/my-lib/src/my-lib.module';



@NgModule({
  declarations: [
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyLibModule,
    HttpClientModule 

  ],
  bootstrap: [],
})
export class AppModule {}